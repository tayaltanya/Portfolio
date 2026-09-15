import React from "react";
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        I am a passionate Web Developer with a strong foundation in modern web technologies and problem-solving.
         I have completed several web development projects using Mern stack technology such as  CSS, JavaScript, Node js,Mongodb
         and React, focusing on building responsive and user-friendly applications. Along with development,
          I actively practice Data Structures and Algorithms and have solved 300+ problems on LeetCode, 
          strengthening my logical thinking and coding skills. Currently, I am working at an intermediate
           level in DSA and continuously improving my problem-solving abilities. I also possess strong teamwork
            and management skills, allowing me to collaborate effectively, organize tasks, and contribute 
            productively in team environments. I am always eager to learn new technologies and build impactful 
            software solutions.
      </p>
      <h2>INTERNSHIP</h2>
      <div className="internship">
        <h3>Software Development Intern</h3>
        <h4>JSL Works Pvt. Ltd.</h4>
        <p className="duration">June 2026 – Present</p>

        <ul>
          <li>
            Working on frontend and backend development for web applications.
          </li>
          <li>
            Developing and integrating REST APIs and AI-powered capabilities.
          </li>
          <li>
            Debugging issues and improving application reliability and
            performance.
          </li>
          <li>
            Collaborating with the team to implement features and resolve
            technical issues.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;