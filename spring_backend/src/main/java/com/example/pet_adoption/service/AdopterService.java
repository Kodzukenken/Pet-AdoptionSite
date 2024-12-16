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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.pet_adoption.SecurityConfig;

import java.util.List;
import java.util.Optional;

@Service
public class AdopterService {

    @Autowired
    private AdopterRepository adopterRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AdopterService(
        AdopterRepository adopterRepository,
        MongoTemplate mongoTemplate,
        PasswordEncoder passwordEncoder
    ){
        this.adopterRepository = adopterRepository;
        this.mongoTemplate = mongoTemplate;
        this.passwordEncoder = passwordEncoder;
    }

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

    public boolean checkEmailExist(String email) {
        // Create a query to search for the email in the "adopters" collection
        Query query = new Query(Criteria.where("email").is(email));
    
        // Use MongoTemplate to check if any document matches the query
        return mongoTemplate.exists(query, Adopter.class);
    }
    

    //regist
    public void registerUser(SignupRequest request){
        // check email
        if (adopterRepository.existByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered!");
        }

      //encrypt pass
      String encryptPassword = passwordEncoder.encode(request.getPassword());

      Adopter newUser = new Adopter(request.getEmail(), encryptPassword, request.getName());
      adopterRepository.save(newUser);
    }

    public void authenticateUser(LoginRequest loginRequest){
        Adopter adopter = adopterRepository.findByEmail(loginRequest.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        //validate pass (hashing)
        if(!passwordEncoder.matches(loginRequest.getPassword(), adopter.getPassword())){
            throw new RuntimeException("Invalid email or password");
        }

        return tokenProvider.generateToken(adopter.getEmail());
    }
}
