package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.AdoptionRequest;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptionRequestRepository extends MongoRepository <AdoptionRequest, ObjectId>{
    
    List<AdoptionRequest> findById(String id);

    List<AdoptionRequest> findByPet(String petId);

    List<AdoptionRequest> findByShelter(String shelterId);

    List<AdoptionRequest> findByAdopter(String adopterId);

    List<AdoptionRequest> findByDate(java.util.Date date);

}
