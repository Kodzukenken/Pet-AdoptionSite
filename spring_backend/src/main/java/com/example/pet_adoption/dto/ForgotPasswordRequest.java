package com.example.pet_adoption.dto;

public class ForgotPasswordRequest {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ForgotPasswordRequest(String email) {
        this.email = email;
    }

    public ForgotPasswordRequest() {
    }
    
    
}
