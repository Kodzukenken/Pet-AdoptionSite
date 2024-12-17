package com.example.pet_adoption.dto;

public class PetDTO {
    private String petType;
    private String name;
    private String breed;
    private int age;
    private String path;
    private String status;

    public PetDTO(String petType, int age, String path, String name, String breed, String status) {
        this.petType = petType;
        this.age = age;
        this.path = path;
        this.name = name;
        this.breed = breed;
        this.status = status;
    }


   

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
