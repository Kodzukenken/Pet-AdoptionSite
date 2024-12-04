package com.example.pet_adoption.service;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.repository.AdopterRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;
import java.util.Optional;

@Service
public class AdopterService {

    @Autowired
<<<<<<< HEAD
    private AdopterRepository adoptersRepository;
=======
    private AdopterRepository adopterRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
>>>>>>> 16802e2f75fffb8ec3e7c7fd2adaf0653591ce98

    public List<Adopter> getAllAdopters() {
        return adopterRepository.findAll();
    }

    public Optional<Adopter> getAdopterById(ObjectId id) {
        return adopterRepository.findById(id);
    }

    public Adopter createAdopter(Adopter adopter) {
        return adopterRepository.save(adopter);
    }

    public void updateAdopterAddress(ObjectId id, String newAddress) {
        Query query = new Query(Criteria.where("_id").is(id));
        Update update = new Update().set("address", newAddress);
        mongoTemplate.updateFirst(query, update, Adopter.class);
    }

    public void deleteAdopter(ObjectId id) {
        adopterRepository.deleteById(id);
    }
}
