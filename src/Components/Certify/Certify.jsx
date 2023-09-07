import "./Certify.css";

import { useEffect } from "react";
import {useNavigate} from "react-router-dom";



function Certify()
{
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const useNavi=useNavigate()
    return(
        <>
        <section id="certify">
            <div className="head-home">
                <button onClick={()=>useNavi("/")}> Home</button>
                <p>Certifications</p>
            </div>
            <div className="certify-grid">
                    <a 
                    href="https://www.freecodecamp.org/certification/pranjalkv/javascript-algorithms-and-data-structures" target="_blank">
                        <img className="certify-img" src="/images/cert3.JPG" alt="" /></a>

<a href="https://www.udemy.com/certificate/UC-f00c636d-b78d-4a28-9fd9-630b1fbe2bd4" target="_blank">
     <img className="certify-img" src="/images/cert2.jpg" alt="" />
</a>
                   
                    <a href="https://www.freecodecamp.org/certification/pranjalkv/responsive-web-design" target="_blank">
                        <img className="certify-img" src="/images/cert4.JPG" alt="" /></a>

                    <a href="https://www.udemy.com/certificate/UC-f8785114-0014-4116-87cb-df1c90a9d3ba" target="_blank">
                        <img className="certify-img" src="/images/cert1.jpg" alt="" />
                        </a>
            </div>
        </section>
        </>
    )
}

export default Certify;
       