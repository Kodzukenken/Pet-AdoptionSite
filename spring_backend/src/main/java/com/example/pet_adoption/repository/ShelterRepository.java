package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.Shelter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
<<<<<<< HEAD
import org.springframework.data.mongodb.repository.Query;
=======
>>>>>>> 16802e2f75fffb8ec3e7c7fd2adaf0653591ce98
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
<<<<<<< HEAD
public interface ShelterRepository extends MongoRepository <Shelter, ObjectId>{

    List<Shelter> findById(String id);

    List<Shelter> findByName(String name);

    List<Shelter> findByEmail(String email);

    List<Shelter> findByCity(String city);

    List<Shelter> findByProvince(String province);

    List<Shelter> findByStreet(String street);
} 
=======
public interface ShelterRepository extends MongoRepository<Shelter, ObjectId> {
    List<Shelter> findByCity(String city);
    List<Shelter> findByProvince(String province);
}
>>>>>>> 16802e2f75fffb8ec3e7c7fd2adaf0653591ce98
