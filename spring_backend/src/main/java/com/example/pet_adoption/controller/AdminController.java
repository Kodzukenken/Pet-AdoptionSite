package com.example.pet_adoption.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.model.Pet;
// import com.example.pet_adoption.repository.AdopterRepository;
import com.example.pet_adoption.service.AdminService;


@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')") // Only accessible to users with the ADMIN role
    public ResponseEntity<String> getAdminDashboard() {
        return ResponseEntity.ok("Welcome to the Admin Dashboard!");
    }

    @GetMapping("/adopters")
    public List<Adopter> fetchAllAdopters() {
        return adminService.fetchAllAdopters();
    }

     @DeleteMapping("/remove-adopter/{id}")
    public ResponseEntity<Void> deleteAdopter(@PathVariable ObjectId id) {
        adminService.deleteAdopter(id);
        return ResponseEntity.noContent().build();
    };

    @GetMapping("/pets")
    public List<Pet> fetchAllPets(){
        return adminService.fetchAllPets();
    };

    @PostMapping(value = "/pets/new-pet", consumes = "multipart/form-data")
    public ResponseEntity<?> createPet(
            @RequestParam("name") String name,
            @RequestParam("age") int age,
            @RequestParam("breed") String breed,
            @RequestParam("status") String status,
            @RequestParam("typeId") ObjectId typeId,
            @RequestPart("file") MultipartFile file) {
    
        try {
            // Save the image and get the file path
            String filePath = adminService.saveImage(file);
    
            // Create a new Pet object
            Pet pet = new Pet();
            pet.setName(name);
            pet.setAge(age);
            pet.setBreed(breed);
            pet.setStatus(status);
            pet.setTypeId(typeId);
            pet.setPath(filePath);
    
            // Save the Pet object
            Pet savedPet = adminService.postNewPet(pet);
            return ResponseEntity.ok(savedPet);
    
        } catch (IOException e) {
            // Handle file save errors
            return ResponseEntity.status(500).body("Error saving the file: " + e.getMessage());
        }
    };
    
    //pet update
    @PutMapping("/update-pet/{id}")
    public ResponseEntity<?> updatePet(@PathVariable ObjectId id, @RequestBody Pet pet){
        Optional<Pet> updatedPet = adminService.updatePet(id, pet);
        return updatedPet
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    };

    @DeleteMapping("/remove-pets/{id}")
    public ResponseEntity<Void> removePet(@PathVariable ObjectId id){
        adminService.removePet(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/adoption-request")
    public List<AdoptionRequest> fetchAllAdoptionRequests(){
        return adminService.fetchAllAdoptionRequests();
    }

    @PutMapping("/update-adoptreq/{id}")
    public AdoptionRequest updateAdoptionRequest(@PathVariable ObjectId id, @RequestBody AdoptionRequest adoptionRequest){
        return adminService.updateAdoptionRequest(id, adoptionRequest);
    }

    @DeleteMapping("/remove-adoptreq/{id}")
    public ResponseEntity<Void> deleteAdoptionRequest(@PathVariable ObjectId id){
        adminService.deleteAdoptReq(id);
        return ResponseEntity.noContent().build();
    }
}

