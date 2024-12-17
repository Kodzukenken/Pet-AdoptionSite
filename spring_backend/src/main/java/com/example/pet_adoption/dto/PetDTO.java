package com.example.pet_adoption.dto;

public class PetDTO {
    private String petType;
    private int age;
    private String path;

    public PetDTO(String petType, int age, String path) {
        this.petType = petType;
        this.age = age;
        this.path = path;
    }

    // Getters and setters

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}