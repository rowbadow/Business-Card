import MainImage from './assets/image1.jpg';
import "./styles/homeStyle.css";


function Home() {
    
      return (
        
        <section className="container" id='home-container'>
          
          <div className="MainContent">
            <div className='HomeLeftDiv'>
              <div><h1>Front-End React Developer</h1></div>
              <div id='HomeTextDiv'><p>Hi, I'm Rowan and I am studying for my degree in Computer Science. I have built this website to expand my skills in front-end development.</p></div>
              
              
              <div id="Icons">

                <a className="IconLink" href="https://www.linkedin.com/in/rowanbithal" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={30} height={30} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>

                
                <a> </a>

                <a className="IconLink" href="https://github.com/rowbadow" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={29} height={29} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>

            </div>
            </div>
            

            <div id='HomeImageDiv'><img src={MainImage} id="MainImage"></img></div>
            
          </div>
          <hr className="divider"></hr>
        </section>
        
        
      );
    };
export default Home;