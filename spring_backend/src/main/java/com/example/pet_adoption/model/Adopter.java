package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// import java.util.Date;

@Document(collection = "adopters")  // Specify the collection name
public class Adopter {
    @Id
    private ObjectId id;
    private String name;
    // private String phone;
    private String email;
    private String address;
    private String password;
    private String role;
    private int age;

    public Adopter() {}

    public Adopter(ObjectId id, String name, String email, String address, String password, String role, int age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.password = password;
        this.role = role;
        this.age = age;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
