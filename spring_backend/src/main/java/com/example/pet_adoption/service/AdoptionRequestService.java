package com.example.pet_adoption.service;

import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.repository.AdoptionRequestRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionRequestService {

    @Autowired
    private AdoptionRequestRepository adoptionRequestRepository;

    public List<AdoptionRequest> getAllRequests() {
        System.out.println("getAllRequests");
        return adoptionRequestRepository.findAll();
//        return adoptionRequestRepository.findAll();
    }

    public Optional<AdoptionRequest> getRequestById(ObjectId id) {
        return adoptionRequestRepository.findById(id);
    }

    public AdoptionRequest createRequest(AdoptionRequest adoptionRequest) {
        System.out.println("deleteRequest");
        return adoptionRequestRepository.save(adoptionRequest);
    }

    public AdoptionRequest updateRequest(ObjectId id, AdoptionRequest adoptionRequest) {
        adoptionRequest.setId(id);
        return adoptionRequestRepository.save(adoptionRequest);
    }

    public void deleteRequest(ObjectId id) {
        System.out.println("deleteRequest");

        adoptionRequestRepository.deleteById(id);
    }
}
