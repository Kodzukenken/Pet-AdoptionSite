package com.example.pet_adoption.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.repository.AdopterRepository;

@RestController
@RequestMapping("/test")
public class TestController {
     @Autowired
    private AdopterRepository adopterRepository;

    @GetMapping("/adopters")
    public List<Adopter> getAllAdopters() {
        return adopterRepository.findAll();
    }
}
