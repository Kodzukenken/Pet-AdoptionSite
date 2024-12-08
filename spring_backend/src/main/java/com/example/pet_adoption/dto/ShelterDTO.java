package com.example.pet_adoption.dto;

import java.util.List;
import org.bson.types.ObjectId;

public class ShelterDTO {
    
    private String name;
    private String city;
    private String province;
    private String street;
    private String post_code;
    private String phone;
    private String email;
    private List<ObjectId> availablePets;

    public ShelterDTO(String name, String city, String province, String street, String post_code, String phone, String email, List<ObjectId> availablePets){
        this.name = name;
        this.city = city;
        this.province = province;
        this.street = street;
        this.post_code = post_code;
        this.phone = phone;
        this.email = email;
        this.availablePets = availablePets;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getCity(){
        return city;
    }

    public void setProvince(String province){
        this.province = province;
    }

    public String getProvince(){
        return province;
    }

    public void setStreet(String street){
        this.street = street;
    }

    public String getStreet(){
        return street;
    }

    public void setPostCode(String post_code){
        this.post_code = post_code;
    }

    public String getPostCode(){
        return post_code;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getPhone(){
        return phone;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getEmail(){
        return email;
    }

    public void setAvailablePets(List<ObjectId> availablePets){
        this.availablePets = availablePets;
    }

    public List<ObjectId> getAvailablePets(){
        return availablePets;
    }

}
