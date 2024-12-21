import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Andrew Charnovich</h1>
          <p>DevOps Engineer | MBA Candidate</p>
        </div>
        <div className="hero-image">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF4VxDcv2pd8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696355657236?e=1740009600&v=beta&t=fBQJg20an5A9W_0euYOklvFLJ8YZ2Y8pL19XxRrEkvY" // Replace with your profile picture URL
            alt="Andrew Charnovich"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;