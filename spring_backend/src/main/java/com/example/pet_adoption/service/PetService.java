package com.example.pet_adoption.service;

import com.example.pet_adoption.dto.PetDTO;
import com.example.pet_adoption.model.Category;
import com.example.pet_adoption.model.Pet;
import com.example.pet_adoption.repository.CategoryRepository;
import com.example.pet_adoption.repository.PetRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
// import java.io.File;
// import java.io.IOException;


@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    private final CategoryRepository categoryRepository;

    public PetService(PetRepository petRepository, CategoryRepository categoryRepository) {
        this.petRepository = petRepository;
        this.categoryRepository = categoryRepository;
    }

    // 1. Get Pet by ID
    public Optional<Pet> getPetById(ObjectId id) {
        return petRepository.findById(id);
    }

    // 2. Create Pet with Validation
    public Pet createPet(Pet pet) {
        if (pet.getName() == null || pet.getName().isEmpty()) {
            throw new IllegalArgumentException("Please enter pet name!");
        }
        if (pet.getAge() <= 0) {
            throw new IllegalArgumentException("Pet's minimum age is 1");
        }
        pet.setStatus("Available");
        return petRepository.save(pet);
    }

    // 3. Update Pet - All Fields
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

    // 4. Get All Pets
    public List<PetDTO> getAllPets() {
        return petRepository.findAll()
                .stream()
                .map(pet -> {
                    Category category = categoryRepository.findById(pet.getTypeId())
                            .orElseThrow(() -> new RuntimeException("Category not found"));
                    String petType = category.getType() == 1 ? "Dog" : "Cat";

                    return new PetDTO(
                            petType,
                            pet.getAge(),
                            pet.getPath(),
                            pet.getName(),
                            pet.getBreed(),
                            pet.getStatus()
                    );
                }).collect(Collectors.toList());
    }

    // 5. Get Pets by Status
    public List<PetDTO> getPetsByStatus(String status) {
        return petRepository.findAll()
                .stream()
                .filter(pet -> pet.getStatus().equalsIgnoreCase(status))
                .map(pet -> {
                    String petType = categoryRepository.findById(pet.getTypeId())
                            .map(category -> category.getType() == 1 ? "Dog" : "Cat")
                            .orElse("Unknown");

                    return new PetDTO(
                            petType,
                            pet.getAge(),
                            pet.getPath(),
                            pet.getName(),
                            pet.getBreed(),
                            pet.getStatus()
                    );
                }).collect(Collectors.toList());
    }

    // 6. Delete Pet
    public void deletePet(ObjectId id) {
        petRepository.deleteById(id);
    }

	
}
