package com.example.pet_adoption.dto;

public class PetDTO {
    private String shelterName;
    private String petType;
    private int age;
    private String vaccine;
    private String careNotes;
    private String path;

    public PetDTO(String shelterName, String petType, int age, String vaccine, String careNotes, String path) {
        this.shelterName = shelterName;
        this.petType = petType;
        this.age = age;
        this.vaccine = vaccine;
        this.careNotes = careNotes;
        this.path = path;
    }

    // Getters and setters

    public String getShelterName() {
        return shelterName;
    }

    public void setShelterName(String shelterName) {
        this.shelterName = shelterName;
    }

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

    public String getVaccine() {
        return vaccine;
    }

    public void setVaccine(String vaccine) {
        this.vaccine = vaccine;
    }

    public String getCareNotes() {
        return careNotes;
    }

    public void setCareNotes(String careNotes) {
        this.careNotes = careNotes;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
