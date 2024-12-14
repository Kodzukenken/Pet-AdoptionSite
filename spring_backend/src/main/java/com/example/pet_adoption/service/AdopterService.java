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
import com.example.pet_adoption.dto.SignupRequest;
import com.example.pet_adoption.dto.LoginRequest;

import java.util.List;
import java.util.Optional;

@Service
public class AdopterService {

    @Autowired
    private AdopterRepository adopterRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

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

    //regist
    public void registerUser(SignupRequest request){
        // check email
      if(adopterRepository.findByEmail(request.getEmail())){
        throw new IllegalArgumentException("Email already registered!");
      }

      //encrypt pass
      String encryptPassword = passwordEncoder.encode(request.getPassword());

      Adopter newUser = new Adopter(request.getEmail(), encryptPassword, request.getName());
      adopterRepository.save(newUser);
    }
}
