// About.js

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="About">
      <div className="WelcomeMessage">
        <h1>About BlogWorld</h1>
        <p>Welcome to BlogWorld, Where Every Word Counts.</p>
      </div>
      <div className="Separator"></div>
      <div className="MainContainer">
        <div className="DescriptionContainer">
          <h2>Our Story</h2>
          <p>
            BlogWorld was conceived from a collective love for words, stories, and the boundless world of ideas. Established in 2024, our journey began with the vision of creating a digital sanctuary for diverse voices and perspectives. Today, BlogWorld stands as a testament to the power of words to inspire, inform, and connect.
          </p>
        </div>
        <div className="LongDescriptionContainer">
          <h2>More About Us</h2>
          <p>
            At BlogWorld, we believe in the beauty of storytelling and the impact it can have on the world. Our community of writers and readers spans across continents, creating a vibrant tapestry of ideas and perspectives. Whether you're a seasoned writer or a curious reader, BlogWorld is your home for exploration and inspiration.
          </p>
          <p>
            Our commitment to fostering a diverse and inclusive space is at the core of BlogWorld. We welcome voices from all walks of life, embracing the richness that comes from varied experiences and backgrounds. Join us on this literary journey, where every word resonates and contributes to the ever-expanding narrative of BlogWorld.
          </p>
        </div>
        <div className="MissionContainer">
          <h2>Our Mission</h2>
          <p>
            At BlogWorld, our mission is simple yet profound: to cultivate a space where ideas flourish, stories unfold, and conversations spark. We believe in the transformative power of words, and our goal is to provide a platform where writers, thinkers, and readers alike can explore the vast universe of knowledge and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
