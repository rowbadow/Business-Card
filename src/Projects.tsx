import "./styles/projectsStyle.css";

const projectList = [
  {
    name: "Project1",
    link: "https://github.com/rowbadow",
  },
  {
    name: "Project2",
    link: "https://github.com/rowbadow",
  },
  {
    name: "Project3",
    link: "https://github.com/rowbadow",
  },
  
  
]


function Projects() {
  return (

    <div className="container" id="projects-container">

      <section id="project-content">
        <div className='ProjectsTextDiv'>

          <div><h3>Projects</h3></div>
          <div id="projectSpacing"></div>

        </div>

        <div id="Projects">
          {projectList.map((item) => (
              <a href={item.link} id={item.name}></a>
            ))}
          
        </div>
      </section>
        
      
    </div>
    
  );
};
      
    
export default Projects;