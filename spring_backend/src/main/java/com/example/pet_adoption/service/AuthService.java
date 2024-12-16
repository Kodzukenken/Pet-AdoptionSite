package com.example.pet_adoption.service;

import com.example.pet_adoption.dto.LoginRequest;
import com.example.pet_adoption.dto.ResetPasswordRequest;
import com.example.pet_adoption.dto.SignupRequest;
import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.repository.AdopterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.pet_adoption.security.JwtUtil;

@Service
public class AuthService {
    
    @Autowired
    private AdopterRepository adopterRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil tokenProvider;

    // Login Authentication
    public String authenticateUser(LoginRequest loginRequest) {

        Adopter adopter = adopterRepository.findByEmail(loginRequest.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid email or password"));
    
        // Verify password
        if (!passwordEncoder.matches(loginRequest.getPassword(), adopter.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }
    
        // Generate & return JWT token
        return tokenProvider.generateToken(adopter.getEmail(), adopter.getRole());
    }
    

    // Check if email exis
    public boolean checkEmailExist(String email) {
        return adopterRepository.existsByEmail(email);
    }

    // Register a new user
    public void registerUser(SignupRequest request){
        // Check if email alrd regist
        if (adopterRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered!");
        }

        // Encrypt password
        String encryptPassword = passwordEncoder.encode(request.getPassword());
        String defaultRole = "USER";

        // Create new Adopter 
        Adopter newAdopter = new Adopter(
            null, 
            request.getEmail(), 
            request.getName(), 
            request.getPhoneNum(), 
            request.getAddress(), 
            encryptPassword, 
            defaultRole,
            request.getDob()
        );
    

        adopterRepository.save(newAdopter);
    }

    // reset pass
   public boolean resetPassword(ResetPasswordRequest resetPasswordRequest) {
        Adopter adopter = adopterRepository.findByEmail(resetPasswordRequest.getEmail())
            .orElseThrow(() -> new RuntimeException("Email not found"));

        // Encrypt new password
        String encryptedPassword = passwordEncoder.encode(resetPasswordRequest.getNewPassword());

        // Update password in the database
        adopter.setPassword(encryptedPassword);
        adopterRepository.save(adopter);

        return true;  // Return true to indicate password was updated successfully
    }
}
