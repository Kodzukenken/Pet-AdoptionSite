package com.example.pet_adoption.controller;

import com.example.pet_adoption.dto.AdoptionRequestDTO;
import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.service.AdoptionRequestService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/adoption-requests")
public class AdoptionRequestController {

    @Autowired
    private AdoptionRequestService adoptionRequestService;

    @GetMapping
    public ResponseEntity<List<AdoptionRequestDTO>> getAllAdoptionRequests() {
        return ResponseEntity.ok(adoptionRequestService.getAllAdoptionRequests());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdoptionRequest> getRequestById(@PathVariable ObjectId id) {
        Optional<AdoptionRequest> request = adoptionRequestService.getRequestById(id);
        return request.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public AdoptionRequest createRequest(@RequestBody AdoptionRequest adoptionRequest) {
        return adoptionRequestService.createRequest(adoptionRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdoptionRequest> updateRequest(@PathVariable ObjectId id, @RequestBody AdoptionRequest adoptionRequest) {
        AdoptionRequest updatedRequest = adoptionRequestService.updateRequest(id, adoptionRequest);
        return ResponseEntity.ok(updatedRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable ObjectId id) {
        adoptionRequestService.deleteRequest(id);
        return ResponseEntity.noContent().build();
    }
}
