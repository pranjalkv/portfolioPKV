import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
function Navbar()
{
  const [backdrop ,setbackdrop]=useState(false);
  const [openMenu ,setOpenmenu]=useState(false);
  const [currMenu ,setcurrMenu]=useState("home");
  function scroller()
  {
    if(window.scrollY>6)
    {
      setbackdrop(true);
    }
    else
    {
      setbackdrop(false);
    }
  }
  useEffect(()=>
  {
    window.addEventListener("scroll",scroller)
    return()=>window.removeEventListener("scroll",scroller)
  },[])

useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setcurrMenu(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(openMenu)
  {
    document.body.style.overflow="hidden";
  }
  else{
    document.body.style.overflow="auto"
  }
    return(
             <>
             <nav className="port-navbar d-flex align-items-center justify-content-between">
    <div>
<div className="logo"><p>pranjalkv</p></div>
<div className="move-port">
  <ul className={`port-nav-links ${backdrop ? "blur-class":""} menu`}>
      <li className={currMenu=="home"?"activeN":""}>
        <a href="#" onClick={()=>setcurrMenu("home")}>Home</a>
      </li>
        <li className={currMenu=="about-sec"?"activeN":""}>
        <a href="#about-sec" onClick={()=>setcurrMenu("about-sec")}>About</a>
      </li>
      <li className={currMenu=="proj-sec"?"activeN":""}>
        <a href="#proj-sec" onClick={()=>setcurrMenu("proj-sec")}>Projects</a>
      </li>
      <li className={currMenu=="contact-form"?"activeN":""}>
        <a href="#contact-form" onClick={()=>setcurrMenu("contact-form")}>Contact</a>
      </li> 
  </ul>
  </div>
    
    </div>
  
      {openMenu && <ul className="mobileUl" onClick={()=>setOpenmenu(false)}>
        <div className="cross">
          <FontAwesomeIcon icon={faXmark} onClick={()=>setOpenmenu(false)}/>
        </div>
      <li className="activeN">
        <a href="#">Home</a>
      </li>
        <li>
        <a href="#about-sec">About</a>
      </li>
      <li>
        <a href="#proj-sec">Projects</a>
      </li>
      <li>
        <a href="#contact-form">Contact</a>
      </li> 
  </ul>}
    <div className="mobile-menu px-1 pt-1">
      <FontAwesomeIcon icon={faBars} size="xl" onClick={()=>setOpenmenu(true)}/>
    </div>
</nav>
             </>
    )
}

export default Navbar;