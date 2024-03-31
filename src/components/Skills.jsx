import { Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaBootstrap, FaNodeJs, FaPython, FaDatabase, FaGit, FaGithub, FaUserFriends, FaTools, FaSitemap, FaChalkboardTeacher, FaComments } from 'react-icons/fa';

export default function Skills() {
  return (
    <Container id='skills'>
        <hr />
        <h1>Skills</h1>
        <Row>
            <Col>
            <div>
                <h3>Frontend</h3>
                <ul>
                <li><FaHtml5 /> HTML</li>
                <li><FaCss3 /> CSS</li>
                <li><FaJs /> JavaScript</li>
                <li><FaReact /> React</li>
                <li><FaVuejs /> Vue.js</li>
                <li><FaBootstrap /> Bootstrap</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div>
                <h3>Backend</h3>
                <ul>
                <li><FaNodeJs /> Node.js</li>
                <li><FaDatabase /> MongoDB</li>
                <li><FaTools /> Express</li>
                <li><FaPython /> Python</li>
                <li><FaSitemap /> Django</li>
                <li><FaDatabase /> PostgreSQL</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div>
                <h3>Version Control</h3>
                <ul>
                <li><FaGit /> Git</li>
                <li><FaGithub /> GitHub</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div>
                <h3>Soft Skills</h3>
                <ul>
                <li><FaUserFriends /> Teamwork</li>
                <li><FaTools /> Problem Solving</li>
                <li><FaChalkboardTeacher /> Simplifying the Complex</li>
                <li><FaUserFriends /> Leadership</li>
                <li><FaComments /> Communication</li>
                <li><FaSitemap /> Extensive Planning</li>
                <li><FaChalkboardTeacher /> Public Speaking</li>
                </ul>
            </div>
            </Col>
        </Row>
    </Container>
  );
}