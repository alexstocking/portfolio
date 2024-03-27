import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function Title() {
  return (
    <div className="Title">
        <h1>Hi, I'm Alex Stocking</h1>
        <h5>A junior software engineer with a background in education.</h5>
          <Nav className="ml-auto" style={{fontSize: '3vh', cursor: 'pointer'}}>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} duration={500} style={{color: 'black'}}>About Me</Nav.Link>
            <Nav.Link as={Link} to="projects" spy={true} smooth={true} duration={500} style={{color: 'black'}}>Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} duration={500} style={{color: 'black'}}>Contact Details</Nav.Link>
            {/* Add more Nav.Link for other sections if needed */}
          </Nav>
    </div>
  )
}
