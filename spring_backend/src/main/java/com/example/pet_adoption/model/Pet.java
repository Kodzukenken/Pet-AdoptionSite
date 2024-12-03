package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pets")  // MongoDB collection name
public class Pet {
    @Id
    private ObjectId id;
    private ObjectId typeId;
    private ObjectId shelterId;
    private int age;
    private String vaccine;
    private String careNotes;
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

    public ObjectId getTypeId() {
        return typeId;
    }

    public void setTypeId(ObjectId typeId) {
        this.typeId = typeId;
    }

    public ObjectId getShelterId() {
        return shelterId;
    }

    public void setShelterId(ObjectId shelterId) {
        this.shelterId = shelterId;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public String getVaccine() {
        return vaccine;
    }

    public void setVaccine(String vaccine) {
        this.vaccine = vaccine;
    }
}

