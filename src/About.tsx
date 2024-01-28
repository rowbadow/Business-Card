import "./styles/aboutStyle.css";
import AboutImage from './assets/AboutImage.jpg';
function About() {
  return (

    <div className="container" id="about-container">
      
      <div id='AboutImageDiv'><img src={AboutImage} id="AboutImage"></img></div>
      
      <div className='AboutTextDiv'>

        <div><h2>About Me</h2></div>
        <div><h3>I'm a Computer Science Student from England. 📍</h3></div>
        <div><p id='AboutText'>My name is Rowan Bithal and I am from London, England. I'm currently studying Computer Science at the University of Birmingham.</p></div>
        
      </div>
    </div>
    
  );
};
      
    
export default About;