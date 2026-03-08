import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;