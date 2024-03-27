import { Container, Card, Col, Row } from 'react-bootstrap';


export default function Projects() {
  return (
    <Container id='projects'>
      <h1>Projects</h1>
      <p>Here are the four projects I worked on whilst completling my General Assembly bootcamp.</p>
      <br />
      <Card>
        <Row>
          <Col md={8}>
            <div>
              <h2>Project 1: Frogger</h2>
              <h5>A Browser Game using HTML, CSS and JavaScript</h5>
              <p>Project 1 Description</p>
            </div>
          </Col>
          <Col md={4}>
            <img src="https://i.imgur.com/cU1xCIT.png" alt="Frogger Game" style={{ maxWidth: '100%', height: 'auto'}} />
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={4}>
            <img src="https://i.imgur.com/16y10Iu.png" alt="Custom Pokedex" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col md={8}>
            <div className='projectright'>
              <h2>Project 2: Custom Pokédex</h2>
              <h5>A full stack MEVN application</h5>
              <p>Project 2 Description</p>
            </div>
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={8}>
            <div>
              <h2>Project 3: Cosmic Collectibles</h2>
              <h5>A full stack MERN application</h5>
              <p>Project 3 Description</p>
            </div>
          </Col>
          <Col md={4}>
            <img src="https://i.imgur.com/stL7S1B.png" alt="Cosmic Collectibles" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={4}>
            <img src="https://i.imgur.com/cmRUONA.png" alt="Sage and Whistle" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
          <Col md={8}>
            <div className='projectright'>
              <h2>Project 4: Sage and Whistle</h2>
              <h5>A full stack React/Django application</h5>
              <p>Project 4 Description</p>
            </div>
          </Col>
        </Row>
      </Card>
      <br />
    </Container>
  );
}