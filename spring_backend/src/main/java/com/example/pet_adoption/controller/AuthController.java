package com.example.pet_adoption.controller;

import com.example.pet_adoption.dto.SignupRequest;
import com.example.pet_adoption.dto.LoginRequest;
import com.example.pet_adoption.dto.ResetPasswordRequest;
// import com.example.pet_adoption.model.Adopter;
import com.example.pet_adoption.service.AuthService;


import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Login Endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(token);  // Return JWT token or a similar response
    }

        //account login functions & etc
    @PutMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid SignupRequest authRequest){
        authService.registerUser(authRequest);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Forgot Password Endpoint
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody String email) {
        if (authService.checkEmailExist(email)) {
            // No need to send OTP, just let the user reset the password
            return ResponseEntity.ok("Please proceed to reset your password.");
        }
        return ResponseEntity.status(400).body("Email not found.");
    }

    // Reset Password Endpoint
    @PutMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        boolean isUpdated = authService.resetPassword(resetPasswordRequest);
        if (isUpdated) {
            return ResponseEntity.ok("Password updated successfully.");
        }
        return ResponseEntity.status(400).body("Failed to update password.");
    }
}
