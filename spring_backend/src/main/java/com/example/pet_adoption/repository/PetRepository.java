package com.example.pet_adoption.repository;

import com.example.pet_adoption.model.Pet;
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
public interface PetRepository extends MongoRepository <Pet, ObjectId>{

    List<Pet> findByName(String name);

    List<Pet> findById(String id);

    // pet will have shelter's id
    List<Pet> findByShelter(String shelter_id);

    List<Pet> findByVaccinated(boolean isVaccinated);

    List<Pet> findByCareNoteContaining(String careNote);

    List<Pet> findByType(String type);
} 
=======
public interface PetRepository extends MongoRepository<Pet, ObjectId> {
    List<Pet> findByTypeId(ObjectId typeId);

    List<Pet> findByShelterId(ObjectId shelterId);
}

>>>>>>> 16802e2f75fffb8ec3e7c7fd2adaf0653591ce98
