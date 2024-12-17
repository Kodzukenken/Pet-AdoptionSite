package com.example.pet_adoption.controller;

import com.example.pet_adoption.dto.SignupRequest;
import com.example.pet_adoption.dto.LoginRequest;
import com.example.pet_adoption.dto.ResetPasswordRequest;
import com.example.pet_adoption.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Login Endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok(token);  // Return JWT token
    }

    //account login functions & etc
    @PutMapping(value = "/signup", consumes = "multipart/form-data")
    public ResponseEntity<String> signup(
        @RequestParam("email") String email,
        @RequestParam("name") String name,
        @RequestParam("address") String address,
        @RequestParam("password") String password,
        @RequestParam("age") int age
        // @RequestParam("file") MultipartFile file
        ){
        
        SignupRequest request = new SignupRequest();
            request.setEmail(email);
            request.setPassword(password);
            request.setName(name);
            request.setDob(age);
            request.setAddress(address);

        authService.registerUser(request);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Forgot Password
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody String email) {
        if (authService.checkEmailExist(email)) {
            // No OTP, just let user reset pass
            return ResponseEntity.ok("Please proceed to reset your password.");
        }
        return ResponseEntity.status(400).body("Email not found.");
    }

    // Reset Password 
    @PutMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        boolean isUpdated = authService.resetPassword(resetPasswordRequest);
        if (isUpdated) {
            return ResponseEntity.ok("Password updated successfully.");
        }
        return ResponseEntity.status(400).body("Failed to update password.");
    }
}
