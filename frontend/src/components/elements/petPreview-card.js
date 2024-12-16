import React from "react";
import "../../styles/searchPage.css";

const PetPreviewCard = ({ name, type, age, breed, status, image }) => {
  return (
    <div className="pet-card">
      <img src={image} alt={name} />
      <div className="pet-card-content">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Breed: {breed}</p>
        <p>Age: {age} years</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default PetPreviewCard;
