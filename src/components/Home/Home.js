import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../utils/images';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Little Lemon</h1>
          <p>Experience Mediterranean cuisine at its finest</p>
          <Link to="/signin" className="cta-button">Register Now</Link>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Little Lemon is a charming Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our cozy atmosphere makes every meal feel like a family dinner.</p>
          </div>
          <div className="about-image">
            <img src={IMAGES.RESTAURANT_INTERIOR} alt="Restaurant Interior" />
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Dishes</h2>
        <div className="featured-dishes">
          <div className="dish-card">
            <img src={IMAGES.GREEK_SALAD} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Fresh vegetables, olives, and feta cheese</p>
            <Link to="/menu" className="menu-link">View Menu</Link>
          </div>
          <div className="dish-card">
            <img src={IMAGES.BRUSCHETTA} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Grilled bread with tomatoes and herbs</p>
            <Link to="/menu" className="menu-link">View Menu</Link>
          </div>
          <div className="dish-card">
            <img src={IMAGES.GRILLED_FISH} alt="Grilled Fish" />
            <h3>Grilled Fish</h3>
            <p>Fresh catch of the day with lemon</p>
            <Link to="/menu" className="menu-link">View Menu</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Dine?</h2>
          <p>Book your table now and experience our delicious cuisine</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-button">Reserve a Table</Link>
            <Link to="/menu" className="cta-button secondary">View Full Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
