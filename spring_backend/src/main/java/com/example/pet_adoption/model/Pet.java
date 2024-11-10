package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "pets")  // MongoDB collection name
public class Pet {
    @Id
    private ObjectId id;
    private ObjectId type_id;
    private ObjectId shelter_id;
    private Date dob;
    private String care_notes;
    private String path;


    public Pet(ObjectId id, int type) {
        this.id = id;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getType_id() {
        return type_id;
    }

    public void setType_id(ObjectId type_id) {
        this.type_id = type_id;
    }

    public ObjectId getShelter_id() {
        return shelter_id;
    }

    public void setShelter_id(ObjectId shelter_id) {
        this.shelter_id = shelter_id;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getCare_notes() {
        return care_notes;
    }

    public void setCare_notes(String care_notes) {
        this.care_notes = care_notes;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}

