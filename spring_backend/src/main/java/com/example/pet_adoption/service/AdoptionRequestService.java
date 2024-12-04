package com.example.pet_adoption.service;

import com.example.pet_adoption.dto.AdoptionRequestDTO;
import com.example.pet_adoption.model.AdoptionRequest;
import com.example.pet_adoption.repository.AdoptionRequestRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdoptionRequestService {

    @Autowired
    private AdoptionRequestRepository adoptionRequestRepository;

    public List<AdoptionRequestDTO> getAllAdoptionRequests() {
        List<AdoptionRequest> requests = adoptionRequestRepository.findAll();

        return requests.stream()
                .map(request -> new AdoptionRequestDTO(
                        request.getAdopterName(),
                        request.getDate(),
                        request.getShelter() != null ? request.getShelter().getName() : "Unknown Shelter",
                        request.getPetCategory() != null && request.getPetCategory().getType() == 1 ? "Dog" : "Cat", // Default to "Cat" if null
                        request.getPetName() != null ? request.getPetName() : "Unnamed Pet",
                        request.getStatus() != null ? request.getStatus() : "Pending"
                ))
                .collect(Collectors.toList());
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
