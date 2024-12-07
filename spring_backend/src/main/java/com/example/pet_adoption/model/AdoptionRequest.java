package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.Date;

@Document(collection = "adoptionRequests")
public class AdoptionRequest {
    @Id
    private ObjectId id;
    private String adopterName;
    private Date date;
    private String status;

    @DBRef
    private Shelter shelter;

    @DBRef
    private Category petCategory;

    private String petName;

    public AdoptionRequest(){

    }

    public AdoptionRequest(ObjectId id, String adopterName, Date date, String status, Shelter shelter, Category petCategory, String petName) {
        this.id = id;
        this.adopterName = adopterName;
        this.date = date;
        this.status = status;
        this.shelter = shelter;
        this.petCategory = petCategory;
        this.petName = petName;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAdopterName() {
        return adopterName;
    }

    public void setAdopterName(String adopterName) {
        this.adopterName = adopterName;
    }

    public Category getPetCategory() {
        return petCategory;
    }

    public void setPetCategory(Category petCategory) {
        this.petCategory = petCategory;
    }

    public void setShelter(Shelter shelter) {
        this.shelter = shelter;
    }

    public Shelter getShelter() {
        return shelter;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }
}
