package com.example.pet_adoption.service;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.model.Pet;
import com.example.pet_adoption.repository.AdopterRepository;
import com.example.pet_adoption.repository.AdoptionRequestRepository;
import com.example.pet_adoption.repository.PetRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    
    @Autowired
    private AdopterRepository adopterRepository;
   
    @Autowired
    private PetRepository petRepository;

    @Autowired
    private AdoptionRequestRepository adoptionRequestRepository;

    //fetch all adopter
    public List<Adopter> fetchAllAdopters(){
        return adopterRepository.findAll();
    }

    //remove adopter
    public void deleteAdopter(ObjectId id){
        adopterRepository.deleteById(id);
    }

    //get all pet
    public List<Pet> fetchAllPets(){
        return petRepository.findAll();
    }

    //create new pet
    public Pet postNewPet(Pet pet){
        return petRepository.save(pet);
    }

    //update pet
    public Pet updatePet(ObjectId id, Pet updatedPet){
        Pet existingPet = petRepository.findById(id)
          .orElseThrow(() -> new RuntimeException("Adopter not found"));
        existingPet.setName(updatedPet.getName());
        existingPet.setAge(updatedPet.getAge());
        existingPet.setBreed(updatedPet.getBreed());
        existingPet.setStatus(updatedPet.getStatus());
        existingPet.setTypeId(updatedPet.getTypeId());
        existingPet.setPath(updatedPet.getPath());

        return petRepository.save(existingPet);
    }

    //remove pet
    public void removePet(ObjectId id){
        petRepository.deleteById(id);
    }

    //fetch all adoptreq
    public List<AdoptionRequest> fetchAllAdoptionRequests(){
        return adoptionRequestRepository.findAll();
    }

    //update adoptreq
    public AdoptionRequest updateAdoptionRequest(ObjectId id, AdoptionRequest updatedAdoptionRequest){
        AdoptionRequest currentAdoptionRequest = adoptionRequestRepository.findById(id)
          .orElseThrow(() -> new RuntimeException("Adoption request not found"));
        currentAdoptionRequest.setStatus(updatedAdoptionRequest.getStatus());

        return adoptionRequestRepository.save(currentAdoptionRequest);
    }    

    //delete adoptreq
    public void deleteAdoptReq(ObjectId id){
        adoptionRequestRepository.deleteById(id);
    }
}
