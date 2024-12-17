package com.example.pet_adoption.controller;

import com.example.pet_adoption.dto.PetDTO;
import com.example.pet_adoption.model.Pet;
import com.example.pet_adoption.service.PetService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @Autowired
    private PetService petService;

    // 1. Get all pets
    @GetMapping
    public ResponseEntity<List<PetDTO>> getAllPets() {
        List<PetDTO> pets = petService.getAllPets();
        return ResponseEntity.ok(pets);
    }

    // 2. Get pet by ID
    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable ObjectId id) {
        Optional<Pet> pet = petService.getPetById(id);
        return pet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 3. Create pet with image upload
    // @PostMapping(consumes = "multipart/form-data")
    // public ResponseEntity<Pet> createPet(
    //         @RequestParam("name") String name,
    //         @RequestParam("typeId") ObjectId typeId,
    //         @RequestParam("breed") String breed,
    //         @RequestParam("age") int age,
    //         @RequestParam("image") MultipartFile image) {
    //     try {
    //         // Save the image and retrieve the path
    //         String imagePath = petService.saveImage(image);

    //         // Create a new Pet object
    //         Pet pet = new Pet();
    //         pet.setName(name);
    //         pet.setTypeId(typeId);
    //         pet.setBreed(breed);
    //         pet.setAge(age);
    //         pet.setPath(imagePath);
    //         pet.setStatus("Available");

    //         // Save the pet
    //         Pet createdPet = petService.createPet(pet);
    //         return ResponseEntity.ok(createdPet);
    //     } catch (Exception e) {
    //         return ResponseEntity.badRequest().build();
    //     }
    // }

    // 4. Update pet (optional - add image support)
    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(
            @PathVariable ObjectId id,
            @RequestParam("name") String name,
            @RequestParam("typeId") ObjectId typeId,
            @RequestParam("breed") String breed,
            @RequestParam("age") int age,
            @RequestParam(value = "image", required = false) MultipartFile image) {
        try {
            Optional<Pet> existingPet = petService.getPetById(id);
            if (existingPet.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            // Update pet details
            Pet petDetails = existingPet.get();
            petDetails.setName(name);
            petDetails.setTypeId(typeId);
            petDetails.setBreed(breed);
            petDetails.setAge(age);

            // If a new image is uploaded, update the image path
            if (image != null) {
                // String imagePath = petService.saveImage(image);
                // petDetails.setPath(imagePath);
            }

            Pet updatedPet = petService.createPet(petDetails);
            return ResponseEntity.ok(updatedPet);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // 5. Delete pet
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePet(@PathVariable ObjectId id) {
        petService.deletePet(id);
        return ResponseEntity.noContent().build();
    }
}
