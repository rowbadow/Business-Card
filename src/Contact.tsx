import "./styles/contactStyle.css";

function Contact() {
  return (

    <div className="container" id="contact-container">
      
      <div><h2>Contact Me</h2></div>
      <div><h3>Send me a Message at 👇</h3></div>
      
      
      <div className='ContactTextDiv'>
        <div className='ContactSection' id="Email">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="ContactIcon" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          
          <p id='ContactText'>rowanb109@gmail.com</p>
        </div>

        <div className='ContactSection' id="LinkedIn">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="ContactIcon" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          
          <p id='ContactText'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rowanbithal">@rowanbithal</a></p>
        </div>
        
      </div>
    </div>
    
  );
};
      
    
export default Contact;