import "./styles/navBarStyle.css"
import {Link} from 'react-scroll';


const navlinks = [
  {
    name: "Home",
    link: "home-container",
  },
  {
    name: "About",
    link: "about-container",
  },
  {
    name: "Projects",
    link: "projects-container",
  },
  {
    name: "Contact",
    link: "contact-container",
  }
];

const NavBar = () => {

  return (
    <div className="navbar">
      <ul>
        {navlinks.map((item) => (
            <li key={item.name}>
              
              <Link to={item.link} smooth={true} duration={600}>
              {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavBar;
