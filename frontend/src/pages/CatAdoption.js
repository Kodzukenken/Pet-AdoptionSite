import React from "react";
import "../styles/catAdoptionPage.css";

const mockCats = [
    {
        id: 1,
        name: "Whiskers",
        age: 2,
        breed: "Persian",
        image: "https://via.placeholder.com/300",
        description: "A loving and playful Persian cat looking for a forever home.",
    },
    {
        id: 2,
        name: "Mittens",
        age: 3,
        breed: "Siamese",
        image: "https://via.placeholder.com/300",
        description: "A calm and affectionate Siamese cat ready to be your companion.",
    },
    {
        id: 3,
        name: "Shadow",
        age: 1,
        breed: "Maine Coon",
        image: "https://via.placeholder.com/300",
        description: "An energetic and curious Maine Coon eager for a loving home.",
    },
    {
        id: 4,
        name: "Luna",
        age: 4,
        breed: "Bengal",
        image: "https://via.placeholder.com/300",
        description: "A playful Bengal cat who loves adventures and snuggles.",
    },
    {
        id: 5,
        name: "Oreo",
        age: 5,
        breed: "American Shorthair",
        image: "https://via.placeholder.com/300",
        description: "A gentle and loving American Shorthair looking for a new family.",
    },
];

const CatAdoptionPage = () => {
    return (
        <section className="cat-adoption-page">
            <h1 className="cat-adoption-title">Adopt a Cat</h1>
            <p className="cat-adoption-subtitle">
                Find your perfect feline friend and give them a forever home.
            </p>
            <div className="cat-grid">
                {mockCats.map((cat) => (
                    <div key={cat.id} className="cat-card">
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="cat-card-image"
                        />
                        <div className="cat-card-content">
                            <h2 className="cat-card-name">{cat.name}</h2>
                            <p className="cat-card-breed">{cat.breed}</p>
                            <p className="cat-card-age">Age: {cat.age} years</p>
                            <p className="cat-card-description">
                                {cat.description}
                            </p>
                            <button className="cat-card-button">Adopt {cat.name}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CatAdoptionPage;
