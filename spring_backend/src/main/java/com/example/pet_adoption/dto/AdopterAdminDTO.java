package com.example.pet_adoption.dto;

public class AdopterAdminDTO {
    private String name;
    private String phone;
    private String email;
    private String address;
    private int age;
    private String role;

    public AdopterAdminDTO(String name, String phone, String email, String address, int age, String role){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.age = age;
        this.role = role;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
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

    public void setAddress(String address){
        this.address = address;
    }

    public String getAddress(){
        return address;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int getAge(){
        return age;
    }

    public void setRole(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }

}
