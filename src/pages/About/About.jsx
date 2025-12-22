import React from 'react';
import './About.css';
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <img src={imageLinks.aboutHeaderImg} alt="5 Beans Coffee Shop exterior" className="hero-image" />
                <div className="hero-overlay">
                    <h1>Our Story</h1>
                    <p>From bean to brew - a journey of passion and perfection</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="about-content">
                <div className="about-section">
                    <div className="about-text">
                        <h2>About 5 Beans Coffee Shop</h2>
                        <p className="lead-text">
                            We are five passionate individuals, family and friends, united by our devotion to exceptional coffee.
                        </p>
                        <p>
                            What began as a shared dream in Australia's vibrant café culture has blossomed into a beloved institution in Lebanon. At 5 Beans, we've mastered the alchemy of transforming premium beans into moments of connection and joy.
                        </p>
                        <p>
                            Our journey from a cozy neighborhood café to our new Dekweneh location reflects the warmth and loyalty of our community. Each expansion brings new faces to our family of skilled artisans, all committed to upholding our exacting standards.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={imageLinks.image2About} alt="Our barista crafting coffee" className="styled-image" />
                    </div>
                </div>

                <div className="about-section reverse">
                    <div className="about-image">
                        <img src={imageLinks.baristaAbout} alt="Premium coffee beans selection" className="styled-image" />
                    </div>
                    <div className="about-text">
                        <h2>Our Philosophy</h2>
                        <p className="lead-text">
                            Excellence in every detail, from farm to cup.
                        </p>
                        <p>
                            We source only the finest single-origin beans, ethically traded and roasted to perfection. Our partners are small farms committed to sustainable practices, ensuring quality that transcends the ordinary.
                        </p>
                        <p>
                            Every espresso pull, every milk texture, every service interaction reflects our uncompromising standards. We don't just serve coffee, we curate experiences.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-text">
                        <h2>The 5 Beans Experience</h2>
                        <p className="lead-text">
                            Where craftsmanship meets comfort.
                        </p>
                        <p>
                            Our spaces are designed as havens, warm industrial interiors with artisanal touches that invite lingering. Whether you're a coffee connoisseur or new to specialty brews, our team guides you through flavor profiles to find your perfect match.
                        </p>
                        <p>
                            From our signature blends to limited-edition single origins, each offering tells a story of terroir and technique. Our seasonal creations push boundaries while honoring tradition.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={imageLinks.AboutIcedCoffee} alt="Exquisite latte art" className="styled-image" />
                    </div>
                </div>
            </div>

            {/* Signature Section */}
            <div className="signature-section">
                <div className="signature-content">
                    <h2>Our Signature</h2>
                    <p>
                        The 5 Beans Blend - A harmonious balance of chocolatey depth and bright citrus notes, 
                        roasted exclusively for our shops. Experience why this proprietary blend has become 
                        the hallmark of our identity.
                    </p>
                    <div className="signature-items">
                        <div className="signature-item">
                            <h3>Single Origin Selections</h3>
                            <p>Seasonal offerings from world-renowned coffee regions</p>
                        </div>
                        <div className="signature-item">
                            <h3>Artisanal Brew Methods</h3>
                            <p>Chemex, V60, AeroPress, and Syphon preparations</p>
                        </div>
                        <div className="signature-item">
                            <h3>House-made Pastries</h3>
                            <p>Freshly baked daily using premium local ingredients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;