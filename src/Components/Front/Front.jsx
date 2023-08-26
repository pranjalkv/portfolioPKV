 import "./Front.css"
 import { FaLinkedin ,FaGithub } from "react-icons/fa";
 import { TypeAnimation } from 'react-type-animation';
 import 'bootstrap/dist/css/bootstrap.min.css';

 function Front()
 {
  function downResume()
  {
    let alink=document.createElement("a");
    alink.href="/images/pranjalKumarResume.pdf"
    alink.download="pranjalKumarResume.pdf"
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
        style={{ color:"#86c232" }}
      /></p>
        <div className="text-center">
        <a href="#contact-form"><button className="btn-dow my-2">CONTACT ME</button></a>
        <button className="btn-dow" onClick={downResume}>DOWNLOAD RESUME</button>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/pranjalkv"  target="_blank">
                <FaLinkedin className="anchor-front"/>
          </a>
          <a href="https://twitter.com/kvpranjal" target="_blank">
              <img className="twi-width anchor-front" src="/images/twet.png" alt="" />
          </a>
          <a href="https://github.com/pranjalkv" target="_blank">
              <FaGithub className="anchor-front"/>
          </a>
        </div>
    </div>
    </section>
    )
 }

 export default Front;