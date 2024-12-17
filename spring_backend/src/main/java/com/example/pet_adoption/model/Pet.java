package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pets")  // MongoDB collection name
public class Pet {
    @Id
    private ObjectId id;
    private ObjectId typeId;
    private int age;
    private String name;
<<<<<<< Updated upstream
    private String vaccine;
    private String careNotes;
=======
    // private String vaccine;
    // private String careNotes;
>>>>>>> Stashed changes
    private String path;  //path to img
    private String status;

    // No-argument constructor (required for Spring Data)
    public Pet() {
    }

    // Constructor with all fields
<<<<<<< Updated upstream
    public Pet(ObjectId id, ObjectId typeId, ObjectId shelterId, int age, String vaccine, String careNotes, String path, String status, String name) {
=======
    public Pet(ObjectId id, ObjectId typeId, int age, String path, String status, String name) {
>>>>>>> Stashed changes
        this.id = id;
        this.typeId = typeId;
        this.age = age;
        // this.vaccine = vaccine;
        // this.careNotes = careNotes;
        this.path = path;
        this.status = status;
        this.name = name;
    }

    // Getters and Setters
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
