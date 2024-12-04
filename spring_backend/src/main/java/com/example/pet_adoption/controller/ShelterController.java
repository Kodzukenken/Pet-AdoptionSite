package com.example.pet_adoption.controller;

import com.example.pet_adoption.model.Shelter;
import com.example.pet_adoption.service.ShelterService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shelters")
public class ShelterController {

    private final ShelterService shelterService;

    @Autowired
    public ShelterController(ShelterService shelterService) {
        this.shelterService = shelterService;
    }

    @GetMapping
    public ResponseEntity<List<Shelter>> getAllShelters() {
        return ResponseEntity.ok(shelterService.getAllShelters());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shelter> getShelterById(@PathVariable ObjectId id) {
        return shelterService.getShelterById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<Shelter>> getSheltersByCity(@PathVariable String city) {
        return ResponseEntity.ok(shelterService.getSheltersByCity(city));
    }

    @GetMapping("/province/{province}")
    public ResponseEntity<List<Shelter>> getSheltersByProvince(@PathVariable String province) {
        return ResponseEntity.ok(shelterService.getSheltersByProvince(province));
    }

    @PostMapping
    public ResponseEntity<Shelter> addShelter(@RequestBody Shelter shelter) {
        return ResponseEntity.ok(shelterService.addShelter(shelter));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shelter> updateShelter(@PathVariable ObjectId id, @RequestBody Shelter updatedShelter) {
        Shelter updated = shelterService.updateShelter(id, updatedShelter);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShelter(@PathVariable ObjectId id) {
        shelterService.deleteShelter(id);
        return ResponseEntity.noContent().build();
    }
}
