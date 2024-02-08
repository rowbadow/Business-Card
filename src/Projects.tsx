import "./styles/projectsStyle.css";
import CarRental from "./assets/Car-rental.png";

const projectList = [
  {
    name: "CarRental",
    link: "https://github.com/luc4sB/CarRentalBusinessWebsite",
    image: CarRental,
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
              <a href={item.link} id={item.name}><img src={item.image} className="project-image"/></a>
            ))}
          
        </div>
      </section>
        
      
    </div>
    
  );
};
      
    
export default Projects;