package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "pets")  // MongoDB collection name
public class Shelter {
    @Id
    private ObjectId id;
    private String city;
    private String province;
    private String street;
    private String post_code;
    private String phone;
    private String email;


    public Shelter(ObjectId id, String city, String province, String street, String post_code, String phone, String email) {
        this.id = id;
        this.city = city;
        this.province = province;
        this.street = street;
        this.post_code = post_code;
        this.phone = phone;
        this.email = email;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPost_code() {
        return post_code;
    }

    public void setPost_code(String post_code) {
        this.post_code = post_code;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

