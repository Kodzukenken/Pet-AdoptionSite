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
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

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

        // Save uploaded image to server
    public String saveImage(MultipartFile image) throws IOException {
        String uploadDir = "uploads/";
        String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
        File uploadPath = new File(uploadDir);

        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

        String filePath = Paths.get(uploadDir, fileName).toString();
        image.transferTo(new File(filePath));
        return filePath;
    }

    //update pet
    public Optional<Pet> updatePet(ObjectId id, Pet petDetails) {
        return petRepository.findById(id).map(existingPet -> {
            existingPet.setName(petDetails.getName());
            existingPet.setBreed(petDetails.getBreed());
            existingPet.setAge(petDetails.getAge());
            existingPet.setPath(petDetails.getPath());
            existingPet.setTypeId(petDetails.getTypeId());
            existingPet.setStatus(petDetails.getStatus());
            return petRepository.save(existingPet);
        });
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
