import './App.css';
import NavBar from './components/NavBar.jsx'
import Projects from './components/Projects.jsx'
import AboutMe from './components/BrandStatement.jsx'
import ContactMe from './components/ContactMe.jsx'
import Title from './components/Title.jsx'
import Skills from './components/Skills.jsx'
import Interests from './components/Interests.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Projects id="completed-projects" />
      <Interests id ="interest" />
      <ContactMe id="contact" />
    </div>
  );
}

export default App;
