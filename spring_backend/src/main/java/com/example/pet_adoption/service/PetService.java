package com.example.pet_adoption.service;

import com.example.pet_adoption.dto.PetDTO;
import com.example.pet_adoption.model.Category;
import com.example.pet_adoption.model.Pet;
import com.example.pet_adoption.repository.CategoryRepository;
import com.example.pet_adoption.repository.PetRepository;
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
    private final CategoryRepository categoryRepository;

    public PetService(PetRepository petRepository, CategoryRepository categoryRepository) {
        this.petRepository = petRepository;
        this.categoryRepository = categoryRepository;
    }
    public Optional<Pet> getPetById(ObjectId id) {
        return petRepository.findById(id);

    }
    
    public Pet createPet(Pet pet) {

        if (pet.getStatus().equals("null")) {
            pet.setStatus("Available");
        }

        Pet savedPet = petRepository.save(pet);

        return savedPet;
    }
    
    public List<PetDTO> getAllPets() {
        List<Pet> pets = petRepository.findAll();

        return pets.stream()
                .map(pet -> {
                    Category category = categoryRepository.findById(pet.getTypeId())
                        .orElseThrow(() -> new RuntimeException("Category not found"));
                    String petType = category != null && category.getType() == 1 ? "Dog" : "Cat";

                    return new PetDTO(
                            petType,
                            pet.getAge(),
                            pet.getPath(),
                            pet.getName(),
                            pet.getBreed(),
                            pet.getStatus()
                    );
                })
                .collect(Collectors.toList());
    }


    public Optional<Pet> updatePet(ObjectId id, Pet petDetails) {
        return petRepository.findById(id).map(existingPet -> {
            existingPet.setTypeId(petDetails.getTypeId());
            existingPet.setAge(petDetails.getAge());
            existingPet.setPath(petDetails.getPath());
            return  petRepository.save(existingPet);
        });
    }

    public void deletePet(ObjectId id) {
        petRepository.deleteById(id);
    }

}


