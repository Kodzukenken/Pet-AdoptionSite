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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.model.Pet;
// import com.example.pet_adoption.repository.AdopterRepository;
import com.example.pet_adoption.service.AdminService;
// import com.example.pet_adoption.service.AdopterService;
// import com.example.pet_adoption.*;

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

     @DeleteMapping("/adopters/{id}")
    public ResponseEntity<Void> deleteAdopter(@PathVariable ObjectId id) {
        adminService.deleteAdopter(id);
        return ResponseEntity.noContent().build();
    };

    @GetMapping("/pets")
    public List<Pet> fetchAllPets(){
        return adminService.fetchAllPets();
    }

    @PostMapping("/pets/new-pet")
    public Pet createPet(@RequestBody Pet pet){
        return adminService.postNewPet(pet);
    }

    @PutMapping("/pets/update-pet/{id}")
    public Pet updatePet(@PathVariable ObjectId id, @RequestBody Pet pet){
        return adminService.updatePet(id, pet);
    }

    @DeleteMapping("/pets/{id}")
    public ResponseEntity<Void> removePet(@PathVariable ObjectId id){
        adminService.removePet(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/adoption-request")
    public List<AdoptionRequest> fetchAllAdoptionRequests(){
        return adminService.fetchAllAdoptionRequests();
    }

    @PutMapping("/adoption-request/{id}")
    public AdoptionRequest updateAdoptionRequest(@PathVariable ObjectId id, @RequestBody AdoptionRequest adoptionRequest){
        return adminService.updateAdoptionRequest(id, adoptionRequest);
    }

    @DeleteMapping("/adoption-request/{id}")
    public ResponseEntity<Void> deleteAdoptionRequest(@PathVariable ObjectId id){
        adminService.deleteAdoptReq(id);
        return ResponseEntity.noContent().build();
    }
}

