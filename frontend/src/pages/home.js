import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import "../styles/home.css";
import background from "../assets/bg.png";
import video from "../assets/homevideo.mp4";
import aboutus2 from "../assets/aboutus2.jpg";
import aboutus3 from "../assets/aboutus3.jpg";
import aboutus4 from "../assets/aboutus4.jpg";
import aboutus5 from "../assets/aboutus5.jpg";
import petHome from "../assets/petHome.jpeg";
import petDiet from "../assets/petDiet.jpeg";
import petPlay from "../assets/petPlay.jpeg";
import petVet from "../assets/petVet.jpeg";
import petgroom from "../assets/petgroom.jpeg";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentPetSlide, setCurrentPetSlide] = useState(0);
    const [currentTip, setCurrentTip] = useState(0);
    const mockPets = [
        {
            id: 1,
            name: "Abraham",
            gender: "Male",
            age: 2,
            type: "Dog",
            shelter: "Shelter A",
            vaccines: ["Rabies", "Distemper"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 2,
            name: "Bella",
            gender: "Female",
            age: 3,
            type: "Cat",
            shelter: "Shelter B",
            vaccines: ["FVRCP", "Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 3,
            name: "Charlie",
            gender: "Male",
            age: 1,
            type: "Cat",
            shelter: "Shelter C",
            vaccines: ["Myxomatosis"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 4,
            name: "Daisy",
            gender: "Female",
            age: 4,
            type: "Dog",
            shelter: "Shelter D",
            vaccines: ["Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 5,
            name: "Ella",
            gender: "Female",
            age: 2,
            type: "Cat",
            shelter: "Shelter E",
            vaccines: ["FVRCP", "Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 6,
            name: "Finn",
            gender: "Male",
            age: 3,
            type: "Rabbit",
            shelter: "Shelter F",
            vaccines: ["Myxomatosis"],
            image: "https://via.placeholder.com/300",    
        },
    ];

    const petCareTips = [
        {
            id: 1,
            title: "Prepare Your Home",
            image: "/assets/pethome.jpeg",
            description: "Create a safe and cozy environment to make your pet feel at home.",
        },
        {
            id: 2,
            title: "Healthy Diet",
            icon: "🍖",
            description: "Feed them a balanced diet accordingly.",
        },
        {
            id: 3,
            title: "Exercise and Play",
            icon: "🏃‍♂️",
            description: "Ensure your pet gets enough exercise and playtime to stay healthy and happy.",
        },
        {
            id: 4,
            title: "Vet Visits",
            icon: "👩‍⚕️",
            description: "Visit your vet regularly to check on your pet's health and well-being.",
        },
        {
            id: 5,
            title: "Grooming",
            icon: "🧼",
            description: "Brush and groom your pet to keep them looking and feeling their best.",
        },
    ]


    const handleNextTip = () => {
        setCurrentTip((prevTip) => (prevTip + 1) % petCareTips.length);
    };
    
    const sliderImages = [aboutus2, aboutus3, aboutus4, aboutus5];
    const petSlideCount = Math.ceil(mockPets.length / 3);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length
        );
    };

    const nextPetSlide = () => {
        setCurrentPetSlide((prevSlide) => 
            (prevSlide + 1) % (mockPets.length - 4) // Ensure wrapping for 5 pets
        );
    };
    
    const prevPetSlide = () => {
        setCurrentPetSlide((prevSlide) =>
            (prevSlide - 1 + (mockPets.length - 4)) % (mockPets.length - 4)
        );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">Pawsitively</h1>
                    <h1 className="home__title2">Pet Adoption</h1>
                    <p className="home__description">
                        We believe that every pet deserves a loving home.
                    </p>
                    <button className="home__button">Adopt a Pet</button>
                </div>
                <div className="home__images">
                    <img src={background} alt="Background" className="home__image background" />
                </div>
                <div className="circle circle--large"></div>
                <div className="circle circle--medium"></div>
                <div className="circle circle--small"></div>
            </div>

            <div className="home__video-container">
                <video className="home__video" controls autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div
                className={`adoption__section ${isVisible ? "visible" : "hidden"}`}
                ref={sectionRef}
            >
                <h2 className="card__title">Looking for a pet?</h2>
                <div className="adoption__cards">
                    <div className="adoption__card">
                        <div className="adoption__icon">🏠</div>
                        <h3 className="adoption__card-title">Our Shelters</h3>
                        <p className="adoption__description">
                            Check out our trusted and reliable shelters, ready to provide homes
                        </p>
                        <button className="adoption__button">See Shelters</button>
                    </div>
                    <div className="adoption__card">
                        <div className="adoption__icon">🐱</div>
                        <h3 className="adoption__card-title">Cat Adoption</h3>
                        <p className="adoption__description">
                            Meet our fuzzy snuggly friends waiting with purring hearts for their forever homes
                        </p>
                        <Link to="/cat-adoption">
                            <button className="adoption__button">Adopt a Cat</button>
                        </Link>
                    
                    </div>
                    <div className="adoption__card">
                        <div className="adoption__icon">🐶</div>
                        <h3 className="adoption__card-title">Dog Adoption</h3>
                        <p className="adoption__description">
                            Meet our furry friends waiting with tail-wagging excitement for their forever homes
                        </p>
                        <button className="adoption__button">Adopt a Dog</button>
                    </div>
                </div>
            </div>

            <div className="featured-pets_section">
                <h2 className="featured-pets_title">Featured Pets</h2>
                <div className="featured-pets_carousel">
                    <button
                        className="carousel_arrow carousel_arrow--left"
                        onClick={prevPetSlide}
                    >
                        &#9664;
                    </button>
                    <div className="carousel_track">
                        {mockPets
                            .slice(currentPetSlide, currentPetSlide + 5) 
                            .map((pet) => (
                                <div key={pet.id} className="featured-pet_card">
                                    <img
                                        src={pet.image}
                                        alt={pet.name}
                                        className="featured-pet_image"
                                    />
                                    <h3 className="featured-pet_name">{pet.name}</h3>
                                    {/* <p className="featured-pet_type">Type: {pet.type}</p>
                                    <p className="featured-pet_gender">Gender: {pet.gender}</p> */}
                                    <p className="featured-pet_age">Age: {pet.age} years</p>
                                    
                                    <button className="featured-pet_button">
                                        Adopt {pet.name}
                                    </button>
                                </div>
                            ))}
                    </div>
                    <button
                        className="carousel_arrow carousel_arrow--right"
                        onClick={nextPetSlide}
                    >
                        &#9654;
                    </button>
                </div>
            </div>
            
            <div className="about_container">
                <div className="about_content">
                    <h1 className="about_title">About Us</h1>
                    <p className="about_description">At Pawsitive, we believe every pet deserves a loving home and every person
                    deserves the joy of unconditional companionship.</p>
                    <p className="about_description">By adopting from Pawsitive, you're not just gaining a loyal companion, you’re
                         joining a community of animal lovers who believe in second chances, endless cuddles, and the incredible bond
                          between humans and pets. Together, we create stories of love, joy, and hope, one adoption at a time.</p>
                </div>
                <div className="about_slider">
                    <button 
                        className="about_slider-arrow about_slider-arrow--left" onClick={prevSlide}>
                        &#9664;
                    </button>
                    <img
                        src={sliderImages[currentSlide]}
                        alt="About Us"
                        className="about_slider-image"
                    />
                    <button className="about_slider-arrow about_slider-arrow--right" onClick={nextSlide}>
                        &#9654;
                    </button>
                </div>
            </div>

            {/* <section className="pet-care-tips-section" onClick={handleNextTip}>
            <h2 className="pet-care-tips__title">Pet Care Tips</h2>
            <div className="pet-care-tip-container">
                <div
                    className="pet-care-tip active"
                    key={petCareTips[currentTip].id}
                >
                    <div className="pet-care-tip-content">
                        <div className="pet-care-tip-icon">
                            {petCareTips[currentTip].icon}
                        </div>
                        <h2 className="pet-care-tip-title">
                            {petCareTips[currentTip].title}
                        </h2>
                        <p className="pet-care-tip-description">
                            {petCareTips[currentTip].description}
                        </p>
                    </div>
                </div>
            </div>
        </section> */}
        </section>
    );
};

export default Home;
