import { Container, Card, Col, Row } from 'react-bootstrap';


export default function Projects() {
  return (
    <Container id='projects' className='projects'>
      <hr />
      <h1>Projects</h1>
      <p>Here are the four projects I worked on whilst completling my General Assembly bootcamp.</p>
      <br />
      <Card>
        <Row>
          <Col md={8}>
            <div className='projectleft'>
              <h2>Project 1: Frogger</h2>
              <h5>A Browser Game using HTML, CSS and JavaScript</h5>
              <p>For my first project, I was tasked with building a browser game using HTML, CSS and JavaScript. I decided to create the classic game Frogger. It has 3 board sizes with each having levels getting incrementally harder to complete. I decided to go with a retro theme, using an arcade-like font, and 8-bit music and sounds for my audio. It was an excellent first step into programming and I learnt a lot, particularly about refactoring my code to make it more readable and reusable.</p>
              <a href="https://github.com/alexstocking/FroggerUnit1BrowserGame" target="blank">GitHub</a> &nbsp;
              <a href="https://alexstocking.github.io/FroggerUnit1BrowserGame/FroggerUnit1BrowserGame/" target="blank">Game</a>
            </div>
          </Col>
          <Col md={4}>
            <a href="https://alexstocking.github.io/FroggerUnit1BrowserGame/FroggerUnit1BrowserGame/" target="blank"><img src="https://i.imgur.com/cU1xCIT.png" alt="Frogger Game" style={{ maxWidth: '100%', height: '100%'}} /></a>
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={4}>
          <a href="https://custom-pokedex-club.netlify.app/" target="blank"><img src="https://i.imgur.com/16y10Iu.png" alt="Custom Pokedex" style={{ maxWidth: '100%', height: '100%' }} /></a>
          </Col>
          <Col md={8}>
            <div className='projectright'>
              <h2>Project 2: Custom Pokédex</h2>
              <h5>A full stack MEVN application</h5>
              <p>I developed a MEVN infrastructure website as part of my second project. This project entailed creating a platform that allowed for seamless CRUD operations by users. I took the initiative to design and implement a custom Pokedex application within this framework, enabling users to both edit existing Pokemon entries and generate new ones. Throughout this endeavour, I delved into the intricacies of Google authentication, broadening my skill set and enhancing my understanding of user authentication mechanisms in web development.</p>
            </div>
            <div className='linksright'>
              <a href="https://github.com/alexstocking/Unit2ProjectFrontend" target="blank">GitHub Frontend</a> &nbsp;
              <a href="https://github.com/alexstocking/Unit2ProjectBackend" target="blank">GitHub Backend</a> &nbsp;
              <a href="https://custom-pokedex-club.netlify.app/" target="blank">Custom Pokédex Application</a>
            </div>
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={8}>
            <div className='projectleft'>
              <h2>Project 3: Cosmic Collectibles</h2>
              <h5>A full stack MERN application</h5>
              <p>I worked within a team of three to develop a dynamic MERN infrastructure website for our third project. As part of this collaboration we conceived and realised Cosmic Collectibles, an ecommerce platform offering fictional space products for purchase. My primary responsibilities encompassed the development of backend endpoints and overseeing the implementation of intricate features within the frontend, notably the shopping cart functionality and user authentication mechanisms.</p>
              <a href="https://github.com/alexstocking/Project3-Frontend" target="blank">GitHub Frontend</a> &nbsp;
              <a href="https://github.com/alexstocking/Project3Backend" target="blank">GitHub Backend</a> &nbsp;
              <a href="https://cosmiccollectibles.netlify.app/" target="blank">Cosmic Collectibles Application</a>
            </div>
          </Col>
          <Col md={4}>
            <a href="https://cosmiccollectibles.netlify.app/" target="blank"><img src="https://i.imgur.com/stL7S1B.png" alt="Cosmic Collectibles" style={{ maxWidth: '100%', height: '100%' }} /></a>
          </Col>
        </Row>
      </Card>
      <br />
      <Card>
        <Row>
          <Col md={4}>
          <a href="https://sageandwhistle.netlify.app/" target="blank"><img src="https://i.imgur.com/cmRUONA.png" alt="Sage and Whistle" style={{ maxWidth: '100%', height: '100%' }} /></a>
          </Col>
          <Col md={8}>
            <div className='projectright'>
              <h2>Project 4: Sage and Whistle</h2>
              <h5>A full stack React/Django application</h5>
              <p>For my final project, I had to connect a REACT frontend with a Django backend, creating a seamless application. Drawing inspiration from my wife's craft business, Sage and Whistle, I developed an ecommerce platform tailored to her needs, enabling the smooth sale of products alongside a feature for users to submit custom requests and create their own wish lists. This project not only showcased my adaptability and problem-solving skills but also underscored my commitment to delivering innovative solutions that marry technical excellence with real-world utility.</p>
            </div>
            <div className='linksright'>
              <a href="https://github.com/alexstocking/project4frontend" target="blank">GitHub Frontend</a> &nbsp;
              <a href="https://github.com/alexstocking/project4backend" target="blank">GitHub Backend</a> &nbsp;
              <a href="https://sageandwhistle.netlify.app/" target="blank">Sage and Whistle Application</a>
            </div>
          </Col>
        </Row>
      </Card>
      <br />
    </Container>
  );
}