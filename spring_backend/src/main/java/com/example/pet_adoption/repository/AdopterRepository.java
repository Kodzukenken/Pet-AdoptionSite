package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.Adopter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptersRepository extends MongoRepository<Adopter, ObjectId> {

    // Find an adopter by their name
    List<Adopter> findByName(String name);

    // Find adopters by a partial match on the address
    List<Adopter> findByAddressContaining(String address);

    // Find adopters older than a certain date of birth
    @Query("{ 'dob' : { $lt: ?0 } }")
    List<Adopter> findAdoptersOlderThan(java.util.Date dob);

    // Update the address of an adopter by ID
    @Query(value = "{ '_id' : ?0 }", update = "{ '$set' : { 'address' : ?1 } }")
    void updateAddressById(ObjectId id, String newAddress);

    // Delete adopters by name
    void deleteByName(String name);
}