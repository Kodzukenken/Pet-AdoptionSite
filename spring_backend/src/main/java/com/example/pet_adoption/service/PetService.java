package com.example.pet_adoption.service;

import com.example.pet_adoption.dto.PetDTO;
import com.example.pet_adoption.model.Category;
import com.example.pet_adoption.model.Pet;
import com.example.pet_adoption.model.Shelter;
import com.example.pet_adoption.repository.CategoryRepository;
import  com.example.pet_adoption.repository.PetRepository;
import com.example.pet_adoption.repository.ShelterRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepository;
    private final ShelterRepository shelterRepository;
    private final CategoryRepository categoryRepository;

    public PetService(PetRepository petRepository, ShelterRepository shelterRepository, CategoryRepository categoryRepository) {
        this.petRepository = petRepository;
        this.shelterRepository = shelterRepository;
        this.categoryRepository = categoryRepository;
    }
    public Optional<Pet> getPetById(ObjectId id) {
        return petRepository.findById(id);
    }
    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    public List<PetDTO> getAllPets() {
        List<Pet> pets = petRepository.findAll();

        return pets.stream()
                .map(pet -> {
                    Shelter shelter = shelterRepository.findById(pet.getShelterId()).orElse(null);
                    Category category = categoryRepository.findById(pet.getTypeId()).orElse(null);

                    String shelterName = shelter != null ? shelter.getName() : "Unknown Shelter";
                    String petType = category != null && category.getType() == 1 ? "Dog" : "Cat";

                    return new PetDTO(
                            shelterName,
                            petType,
                            pet.getAge(),
                            pet.getVaccine(),
                            pet.getCareNotes(),
                            pet.getPath()
                    );
                })
                .collect(Collectors.toList());
    }

    public Optional<Pet> updatePet(ObjectId id, Pet petDetails) {
        return petRepository.findById(id).map(existingPet -> {
            existingPet.setTypeId(petDetails.getTypeId());
            existingPet.setShelterId(petDetails.getShelterId());
            existingPet.setAge(petDetails.getAge());
            existingPet.setCareNotes(petDetails.getCareNotes());
            existingPet.setPath(petDetails.getPath());
            return  petRepository.save(existingPet);
        });
    }

    public void deletePet(ObjectId id) {
        petRepository.deleteById(id);
    }

}


