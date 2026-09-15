import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hello, I'm Taniya Tayal</h1>

      <h2>Full Stack Developer | Software Engineer</h2>

      <p>
        I build modern web applications using React, JavaScript,
        REST APIs ,Node js, Express js and clean UI design.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>

        <a href="/resume.pdf"  target ="_blank"  rel="noopener noreferrer" className="btn resume">
          view Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;