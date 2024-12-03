package com.example.pet_adoption.service;

import com.example.pet_adoption.model.Pet;
import  com.example.pet_adoption.repository.PetRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;
    public List<Pet> getAllPets() {
        return  petRepository.findAll();
    }
    public Optional<Pet> getPetById(ObjectId id) {
        return petRepository.findById(id);
    }
    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
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


