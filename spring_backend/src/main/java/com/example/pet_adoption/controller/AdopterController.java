package com.example.pet_adoption.controller;

import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.service.AdopterService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.pet_adoption.dto.LoginRequest;
import com.example.pet_adoption.dto.SignupRequest;
import com.example.pet_adoption.dto.LoginResponse;

import java.util.List;
import java.util.Optional;
// import javax.validation.Valid;

@RestController
@RequestMapping("/api/adopters")
public class AdopterController {

    @Autowired
    private AdopterService adopterService;

    @GetMapping
    public List<Adopter> getAllAdopters() {
        return adopterService.getAllAdopters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adopter> getAdopterById(@PathVariable ObjectId id) {
        Optional<Adopter> adopter = adopterService.getAdopterById(id);
        return adopter.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Adopter createAdopter(@RequestBody Adopter adopters) {
        return adopterService.createAdopter(adopters);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Adopter> updateAdopter(@PathVariable ObjectId id, @RequestBody String adopters) {
        adopterService.updateAdopterAddress(id, adopters);
        Optional<Adopter> adopter = adopterService.getAdopterById(id);
        return adopter.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdopter(@PathVariable ObjectId id) {
        adopterService.deleteAdopter(id);
        return ResponseEntity.noContent().build();
    }
        //account login functions & etc
    @PutMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid SignupRequest adopterRequest){
        adopterService.registerUser(adopterRequest);
        return ResponseEntity.ok("User registered successfully!");
    }

        //make login & token generation
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest loginRequest){
      String token = adopterService.authenticateUser(loginRequest);
      return ResponseEntity.ok(new LoginResponse(token));
    }

        //make mechanism, only check email valid then reenter pass
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request){
      adopterService.generatePasswordResetToken(request.getEmail());
      return ResponseEntity.ok("Password reset link sent!");
    }
}
