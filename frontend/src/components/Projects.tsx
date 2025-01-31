import "../styles/porjects.scss";

const Projects: React.FC = () => {
    const projects = [
        {
          name: "TaskFlow",
          description: "A sleek task management app designed to boost productivity.",
          icons: ["/js-sm.svg", "/react-sm.svg", "/git.svg"],
        },
        {
          name: "Project name",
          description: "A modern e-commerce site optimized for speed and security.",
          icons: ["/js-sm.svg", "/py-sm.svg", "/git.svg"],
        },
        {
          name: "CryptoLens",
          description: "A real-time cryptocurrency tracker that keeps you ahead of the curve.",
          icons: ["/js-sm.svg", "/react-sm.svg", "/git.svg"],
        },
        {
          name: "Project name",
          description: "A real-time project that keeps you ahead of the curve.",
          icons: ["/sql.svg", "/py-sm.svg", "/git.svg"],
        },
      ];
  
    return (
<div className="projects-section">
    <div className="project-container">
      <div className="project-header"><h2>My Projects:</h2></div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.name}</h3>
            <p className="description">
              Description:
            </p>
            <p className="details">{project.description}</p>
            <div className="icons">
              {project.icons.map((icon, i) => (
                <img key={i} src={icon} alt="icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    );
  };
  
  export default Projects;
