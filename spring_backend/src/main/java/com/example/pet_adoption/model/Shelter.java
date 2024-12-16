package com.example.pet_adoption.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// import java.util.Date;
import java.util.List;

@Document(collection = "shelters")  // MongoDB collection name
public class Shelter {
    @Id
    private ObjectId id;
    private String city;
    private String name;
    private String province;
    private String street;
    private String postCode;
    private String phone;
    private String email;
    private List<ObjectId> availablePets;
    private int clickCount;

    public Shelter(){

    }


    public Shelter(ObjectId id, String city, String province, String street, String postCode, String phone, String email, List<ObjectId> availablePets, int clickCount) {
        this.id = id;
        this.city = city;
        this.province = province;
        this.street = street;
        this.postCode = postCode;
        this.phone = phone;
        this.email = email;
        this.availablePets = availablePets;
        this.clickCount = clickCount;
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

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ObjectId> getAvailablePets(){
        return availablePets;
    }

    public void setAvailablePets(List<ObjectId> availablePets){
        this.availablePets = availablePets;
    }

    public int getClickCount(){
        return clickCount;
    }

    public void setClickCount(int clickCount){
        this.clickCount = clickCount;
    }
}

