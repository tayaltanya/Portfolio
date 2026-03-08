import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hello, I'm Taniya Tayal</h1>

      <h2>Frontend Developer | React Developer | Software Engineer</h2>

      <p>
        I build modern web applications using React, JavaScript,
        REST APIs and clean UI design.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>

        <a href="/resume.pdf" className="btn resume">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;