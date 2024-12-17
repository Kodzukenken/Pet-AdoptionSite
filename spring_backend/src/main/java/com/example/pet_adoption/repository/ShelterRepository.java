package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.Shelter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelterRepository extends MongoRepository<Shelter, ObjectId> {

    List<Shelter> findById(String id);  // Corrected to match ObjectId type

    List<Shelter> findByName(String name);

    List<Shelter> findByEmail(String email);

    List<Shelter> findByCity(String city);

    List<Shelter> findByProvince(String province);

    List<Shelter> findByStreet(String street);

    List<Shelter> findByClickCount(int clickCount);  // Corrected method name to match field
}
