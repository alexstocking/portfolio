import './App.css';
import NavBar from './components/NavBar.jsx'
import Projects from './components/Projects.jsx'
import AboutMe from './components/BrandStatement.jsx'
import ContactMe from './components/ContactMe.jsx'
import Title from './components/Title.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <AboutMe id="about" />
      <Projects id="completed-projects" />
      <ContactMe id="contact" />
    </div>
  );
}

export default App;
