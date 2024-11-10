package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "adoption_requests")  // MongoDB collection name
public class AdoptionRequest {
    @Id
    private ObjectId id;
    private ObjectId adopter_id;
    private String shelter;
    private int pet_type;
    private String pet_name;
    private int status;

    public AdoptionRequest(ObjectId id, ObjectId adopter_id, String shelter, int pet_type, String pet_name, int status) {
        this.id = id;
        this.shelter = shelter;
        this.adopter_id = adopter_id;
        this.pet_type = pet_type;
        this.pet_name = pet_name;
        this.status = status;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getShelter() {
        return shelter;
    }

    public void setShelter(String shelter) {
        this.shelter = shelter;
    }

    public int getPetType() {
        return pet_type;
    }

    public void setPetType(int pet_type) {
        this.pet_type = pet_type;
    }

    public String getPetName() {
        return pet_name;
    }

    public void setPetName(String pet_name) {
        this.pet_name = pet_name;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public ObjectId getAdopterId() {
        return adopter_id;
    }

    public void setAdopterId(ObjectId adopter_id) {
        this.adopter_id = adopter_id;
    }
}
