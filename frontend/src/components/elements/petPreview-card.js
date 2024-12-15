import React from 'react';

const PetPreviewCard = ({ name, age, type, breed, status, image }) => {
    return (
        <div className="pet-card">
            <img src={image} alt={`Image of ${name}`} className="pet-card-image" />
            <div className="pet-card-details">
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
