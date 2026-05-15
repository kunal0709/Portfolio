







import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "../stylesheet/project.css";

const projects = [
  {
    title: "Naukri",
    shortDesc: "A job portal platform for searching, applying, and managing job listings.",
    hoverDesc: "Built a responsive job portal UI with modern design, smooth navigation, and reusable components using react.js and Tailwind.",
    tech: ["Toolkit", "firebase", "Tailwind"],
    live: "https://naukri-rho.vercel.app/",
    github: "https://github.com/kunal0709",
    caseStudy: "https://naukri-rho.vercel.app/",
  },
  {
    title: "agency.AI",
    shortDesc: "Modern GPT-4 Powered Chat App.",
    hoverDesc: "Features include real-time streaming responses, markdown support, and persistent chat history using Firebase.",
    tech: ["React", "OpenAI", "Node.js"],
    live: "https://stellar-dasik-ee4585.netlify.app/",
    github: "https://github.com/kunal0709",
    caseStudy: "https://stellar-dasik-ee4585.netlify.app/",
  },
  {
    title: "Hospital-management-system",
  shortDesc: "Efficient hospital management system for handling patient records and appointments.",
hoverDesc: "Manage patients, doctors, appointments, and billing with a streamlined interface designed for real-time hospital operations.",
    tech: ["React.js", "Redux_toolkit", "LocalStorage"],
    live: "https://your-crypto-link.com",
    github: "https://splendid-granita-566cce.netlify.app/",
    caseStudy: "https://splendid-granita-566cce.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h2 className="projects-title">Selected <span>Works</span></h2>
        <div className="underline"></div>
      </div>

      <div className="projects-slider-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-content">
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p className="short-desc">{project.shortDesc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Your original Hover Overlay Feature */}
              <div className="project-overlay">
                <div className="overlay-text">
                  <h4>Overview</h4>
                  <p>{project.hoverDesc}</p>
                  <button className="view-btn">
                    <a href={project.caseStudy} target="_blank" rel="noreferrer">
                      View Case Study
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;