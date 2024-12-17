package com.example.pet_adoption.dto;

import java.util.Date;

public class AdoptionRequestDTO {
    private String adopterName;
    private Date date;
    private String petKind;
    private String petName;
    private String status;

    public AdoptionRequestDTO(String adopterName, Date date, String petKind, String petName, String status) {
        this.adopterName = adopterName;
        this.date = date;
        this.petKind = petKind;
        this.petName = petName;
        this.status = status;
    }

    public String getAdopterName() {
        return adopterName;
    }

    public void setAdopterName(String adopterName) {
        this.adopterName = adopterName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPetKind() {
        return petKind;
    }

    public void setPetKind(String petKind) {
        this.petKind = petKind;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}