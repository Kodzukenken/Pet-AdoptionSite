package com.example.pet_adoption.service;

import com.example.pet_adoption.model.Shelter;
import com.example.pet_adoption.repository.ShelterRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShelterService {

    private final ShelterRepository shelterRepository;

    @Autowired
    public ShelterService(ShelterRepository shelterRepository) {
        this.shelterRepository = shelterRepository;
    }

    public List<Shelter> getAllShelters() {
        return shelterRepository.findAll();
    }

    public Optional<Shelter> getShelterById(ObjectId id) {
        return shelterRepository.findById(id);
    }

    public List<Shelter> getSheltersByCity(String city) {
        return shelterRepository.findByCity(city);
    }

    public List<Shelter> getSheltersByProvince(String province) {
        return shelterRepository.findByProvince(province);
    }

    public Shelter addShelter(Shelter shelter) {
        return shelterRepository.save(shelter);
    }

    public Shelter updateShelter(ObjectId id, Shelter updatedShelter) {
        Optional<Shelter> optionalShelter = shelterRepository.findById(id);
        if (optionalShelter.isPresent()) {
            Shelter shelter = optionalShelter.get();
            shelter.setName(updatedShelter.getName());
            shelter.setCity(updatedShelter.getCity());
            shelter.setProvince(updatedShelter.getProvince());
            shelter.setStreet(updatedShelter.getStreet());
            shelter.setPostCode(updatedShelter.getPostCode());
            shelter.setPhone(updatedShelter.getPhone());
            shelter.setEmail(updatedShelter.getEmail());
            return shelterRepository.save(shelter);
        }
        return null;
    }

    public void deleteShelter(ObjectId id) {
        shelterRepository.deleteById(id);
    }
}
