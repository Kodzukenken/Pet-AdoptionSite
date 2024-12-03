package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.AdoptionRequest;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionRequestRepository extends MongoRepository<AdoptionRequest, ObjectId> {
}