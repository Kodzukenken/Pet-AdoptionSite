package com.example.pet_adoption.controller;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.service.AdopterService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
// import javax.validation.Valid;

@RestController
@RequestMapping("/api/adopters")
public class AdopterController {

    @Autowired
    private AdopterService adopterService;

    @GetMapping
    public List<Adopter> getAllAdopters() {
        return adopterService.getAllAdopters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adopter> getAdopterById(@PathVariable ObjectId id) {
        Optional<Adopter> adopter = adopterService.getAdopterById(id);
        return adopter.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Adopter createAdopter(@RequestBody Adopter adopters) {
        return adopterService.createAdopter(adopters);
    }

    @PutMapping("/update")
    public ResponseEntity<Adopter> updateAdopter(@PathVariable ObjectId id, @RequestBody String adopters) {
        adopterService.updateAdopterAddress(id, adopters);
        Optional<Adopter> adopter = adopterService.getAdopterById(id);
        return adopter.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteAdopter(@PathVariable ObjectId id) {
        adopterService.deleteAdopter(id);
        return ResponseEntity.noContent().build();
    };
}
