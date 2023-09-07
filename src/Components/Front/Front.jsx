 import "./Front.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub ,faXTwitter} from '@fortawesome/free-brands-svg-icons'
 import { TypeAnimation } from 'react-type-animation';
 import 'bootstrap/dist/css/bootstrap.min.css';

 function Front()
 {
  function downResume()
  {
    let alink=document.createElement("a");
    alink.href="/images/pranjalkumarResume12.pdf"
    alink.download="pranjalkumarResume12.pdf"
    document.body.appendChild(alink);
    alink.click()
    document.body.removeChild(alink);
  }
    return(
    <section id="home">
      <div className="main-bg"></div> 
    <div className="overlay"></div> 

    <div className="intro_front">
        <p className="hello">Hello World!</p>
        <p className="name">I'm Pranjal Kumar</p>
        <p className="works">Front-end <TypeAnimation
        sequence={[
          "Developer",
          3000,
          "Engineer",
          3000,
        ]}
        speed={4}
        repeat={Infinity}
        style={{ color:"#08a7f1" }}
      /></p>
        <div className="text-center">
        <a href="#contact-form"><button className="btn-dow my-2">CONTACT ME</button></a>
        <button className="btn-dow" onClick={downResume}>DOWNLOAD RESUME</button>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/pranjalkv"  target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="anchor-front"/>
          </a>
          <a href="https://twitter.com/kvpranjal" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="anchor-front"/>
          </a>
          <a href="https://github.com/pranjalkv" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="anchor-front"/>
          </a>
        </div>
    </div>
    </section>
    )
 }

 export default Front;