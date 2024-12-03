package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "adoptionRequests")  // MongoDB collection name
public class AdoptionRequest {
    @Id
    private ObjectId id;
    private ObjectId adopterId;
    private ObjectId petId;
    private ObjectId shelterId;
    private Date date;
    private int status;

    public AdoptionRequest(ObjectId id, ObjectId adopterId, ObjectId shelterId, ObjectId petId, int status) {
        this.id = id;
        this.shelterId = shelterId;
        this.adopterId = adopterId;
        this.petId = petId;
        this.status = status;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getShelterId() {
        return shelterId;
    }

    public void setShelter(ObjectId shelterId) {
        this.shelterId = shelterId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public ObjectId getAdopterId() {
        return adopterId;
    }

    public void setAdopterId(ObjectId adopterId) {
        this.adopterId = adopterId;
    }

    public ObjectId getPetId() {
        return petId;
    }

    public void setPetId(ObjectId adopterId) {
        this.petId = petId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
