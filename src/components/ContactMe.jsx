import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

export default function ContactMe() {
    return (
        <footer id='contact' className="footer">
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h1>Social Links</h1>
                        <ul className="contact-details">
                            <li>Email: <a href="mailto:astocking27@gmail.com" className='email'>astocking27@gmail.com</a></li>
                            <li>Hampshire, United Kingdom</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <br />
                        <br />
                        <ul className="social-icons">
                            <li><a href="https://www.linkedin.com/in/alex-stocking/"><FontAwesomeIcon icon={faLinkedin} className="blackIcon"/></a></li> &nbsp;
                            <li><a href="https://github.com/alexstocking"><FontAwesomeIcon icon={faGithub} className="blackIcon"/></a></li> &nbsp;
                            <li><a href="https://www.facebook.com/AlexNStocking"><FontAwesomeIcon icon={faFacebook} className="blackIcon"/></a></li> &nbsp;
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
