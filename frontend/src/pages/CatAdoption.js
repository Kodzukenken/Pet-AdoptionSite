import React, { useRef, useState } from "react";
import "../styles/catAdoption.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import safeSpace from "../assets/safeSpace.jpeg";
import healthyFood from "../assets/healthyFood.jpeg";
import playInteract from "../assets/playInteract.jpeg";


const mockCats = [
    { id: 1, name: "Whiskers", age: 2, breed: "Persian", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Mittens", age: 3, breed: "Siamese", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Shadow", age: 1, breed: "Maine Coon", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Luna", age: 4, breed: "Bengal", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Oreo", age: 5, breed: "American Shorthair", image: "https://via.placeholder.com/300" },
];

const CatAdoption = () => {
    const sliderRef = useRef(null);
    const [viewAll, setViewAll] = useState(false);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section className="cat-adoption-page">
            <div className="cat-adoption-intro">
    <h1 className="cat-adoption-title">Cat & Kitten Adoption</h1>
    <div className="cat-adoption-description">
        <p>
            Looking to welcome a new cat or kitten into your family? 
        </p>
        <p>
            We can help you find the cat that will suits you best.
        </p>
        <p>
            Whether you're looking for a playful kitten, a laid-back senior cat, or a specific breed,
            there’s a diverse range of adoptable cats waiting for you. Find your purrfect feline friend!
        </p>
    </div>
</div>


            <div className="cat-slider-wrapper">
                <div className="cat-slider-header">
                    <span className="view-all" onClick={() => setViewAll(!viewAll)}>
                        {viewAll ? "Show Slider" : "View All"}
                    </span>
                </div>

                {viewAll ? (
                    <div className="cat-grid">
                        {mockCats.map((cat) => (
                            <div key={cat.id} className="cat-card">
                                <img src={cat.image} alt={cat.name} className="cat-card-image" />
                                <h3 className="cat-card-name">{cat.name}</h3>
                                <p className="cat-card-breed">{cat.breed}</p>
                                <p className="cat-card-age">Age: {cat.age} years</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="slider-container">
                        <button
                            className="custom-arrow left-arrow"
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <FiChevronLeft />
                        </button>
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {mockCats.map((cat) => (
                                <div key={cat.id} className="cat-card">
                                    <img src={cat.image} alt={cat.name} className="cat-card-image" />
                                    <h3 className="cat-card-name">{cat.name}</h3>
                                    <p className="cat-card-breed">{cat.breed}</p>
                                    <p className="cat-card-age">Age: {cat.age} years</p>
                                </div>
                            ))}
                        </Slider>
                        <button
                            className="custom-arrow right-arrow"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                )}
            </div>

            <div className="new-cat-section">
                <h2 className="new-cat-title">For Your New Cat</h2>
                <p className="new-cat-description">
                    Bringing a new cat home can be an exciting experience! Here are some essential tips to help you 
                    take care of your new fur friend:
                </p>
                <div className="new-cat-tips">
                    <div className="tip-card">
                        <img src={safeSpace} alt="Safe Space" />
                        <h3>Create a Safe Space</h3>
                        <p>Set up a quiet and cozy area where your cat can feel secure during their first few days.</p>
                    </div>
                    <div className="tip-card">
                        <img src={healthyFood} alt="Healthy Food" />
                        <h3>Provide Healthy Food</h3>
                        <p>Ensure your cat has access to nutritious food and clean water to keep them healthy and happy.</p>
                    </div>
                    <div className="tip-card">
                        <img src={playInteract} alt="Playtime" />
                        <h3>Play and Interaction</h3>
                        <p>Spend time playing and interacting with your cat to help them adjust and bond with you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatAdoption;
