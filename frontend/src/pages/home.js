import React from "react";
import "../styles/home.css";
import dog1Image from "../assets/dog1.png"; // Replace with actual path
import catImage from "../assets/cat.png";
import dog2Image from "../assets/dog2.png";

const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">
                        Pawsitively <span>Purrfect Care</span>
                    </h1>
                    <p className="home__description">
                        We provide quality pet care and personalized treatment plans for your pet.
                    </p>
                    <button className="home__button">Let's Find Your Pet!</button>
                </div>
                <div className="home__images">
                    <img src={dog1Image} alt="Dog" className="home__image large" />
                    <img src={dog2Image} alt="Smiling Pet" className="home__image medium" />
                    <img src={catImage} alt="Cat" className="home__image small" />
                </div>
                <div className="circle circle--large"></div>
                <div className="circle circle--medium"></div>
                <div className="circle circle--small"></div>
            </div>
        </section>
    );
};

export default Home;
