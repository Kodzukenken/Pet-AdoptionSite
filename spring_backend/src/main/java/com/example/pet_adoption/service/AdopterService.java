package com.example.pet_adoption.service;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.repository.AdopterRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdopterService {

    @Autowired
    private AdopterRepository adoptersRepository;

    public List<Adopter> getAllAdopters() {
        return adoptersRepository.findAll();
    }

    public Optional<Adopter> getAdopterById(ObjectId id) {
        return adoptersRepository.findById(id);
    }

    public Adopter createAdopter(Adopter adopter) {
        return adoptersRepository.save(adopter);
    }

    public Adopter updateAdopter(ObjectId id, Adopter adopter) {
        adopter.setId(id);
        return adoptersRepository.save(adopter);
    }

    public void deleteAdopter(ObjectId id) {
        adoptersRepository.deleteById(id);
    }
}
