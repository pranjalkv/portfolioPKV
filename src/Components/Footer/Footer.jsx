import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaLinkedin ,FaGithub ,FaInstagram ,FaRegCopyright} from "react-icons/fa";
// import {FaTwitter} from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub ,faXTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from "react-router-dom";

function Footer()
{
  const navi =useNavigate();
    return(
        <>
        <footer id="footer">
  {/* Grid container */}
  <div className="footers-div">
    <div className="foot-logo">
      <a href="#"><h1>pranjalkv</h1></a>
    </div>
          <ul className="sec-footer-links">
      <li className="foot-li"><a
        className="footer-links"
        href="https://www.linkedin.com/in/pranjalkv"
        target="_blank"
        role="button"
      >
        <FontAwesomeIcon icon={faLinkedin} className="f-links"/>
      </a></li>

      <li className="foot-li"><a
        className="footer-links"
        href="https://twitter.com/kvpranjal"
        target="_blank"
        role="button"
      >
        <FontAwesomeIcon icon={faXTwitter} className="f-links"/>
      </a></li>

      <li className="foot-li"><a
        className="footer-links"
        href="https://github.com/pranjalkv"
        target="_blank"
        role="button"
      >
        <FontAwesomeIcon icon={faGithub} className="f-links"/>
      </a></li>

      <li className="foot-li"><a
        className="footer-links"
        target="_blank"
        href="https://www.instagram.com/pranjalkv"
        role="button"
      >
        <FontAwesomeIcon icon={faInstagram} className="f-links"/>
      </a></li>

    </ul>
   <div className="cert-foot m-0 p-0" onClick={()=>navi("/certification")}>
    <p>Certifications</p>
   </div>
    </div>
      <div className="foot-copy text-center">
      <p>Copyright 2023 pranjalkv.com .All Rights Reserved.</p>
    </div>
   
</footer>

        </>
    )
}
export default Footer;