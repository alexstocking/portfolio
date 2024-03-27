import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function NavBar() {
  const scrollToSection = (id) => {
    console.log("Scrolling to:", id);
    const section = document.getElementById(id);
    console.log("Section:", section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid className='navbar'>
        <Navbar.Brand href="/" className='brand'>Alex Stocking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto links">
            <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact Details</Nav.Link>
          </Nav>
          <Nav className="icons">
            <Nav.Link href="https://www.linkedin.com/in/alex-stocking/" target="_blank"><FaLinkedin /></Nav.Link>
            <Nav.Link href="https://github.com/alexstocking" target="_blank"><FaGithub /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
