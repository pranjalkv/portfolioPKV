import { useEffect, useState ,useRef} from "react";
import "./Project.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode , faArrowUpRightFromSquare ,faPlay, faXmark} from '@fortawesome/free-solid-svg-icons'

import ReactPlayer from 'react-player'
import topProj from "../../Projdata";

function Project()
{
    const vref=useRef()
   const [vidOpen ,setVidopen]=useState("")
   const [hide,setHide]=useState(-1)

    if(vidOpen!="")
    {
        document.body.style.overflow="hidden"
    }
    else
    {
        document.body.style.overflow="auto"
    }
        useEffect(() => {
    const checkOutside = e => {
      if (vidOpen!="" && vref.current && !vref.current.contains(e.target))
      {
        setVidopen("")
      }
    }

    document.addEventListener("mousedown", checkOutside)

    return () => {
      document.removeEventListener("mousedown", checkOutside)
    }
  }, [vidOpen])

  function cutWord(str)
  {
    let s= str.slice(0,100)+"..."
    return s;
  }
  function ytOpen(e)
  {
    setVidopen(e.target.id)
  }

    return(
        <section id="proj-sec">
            <h1>Projects</h1>
            <div className="best-proj">
                {topProj.map((ele,i)=><div key={ele.id} className={`proj-box ${i%2==0 ? "proj-border-left":"proj-border-right"}`}>
                    <div className={`proj-img ${i%2==0 ? "":"set-img-order"}`}>
                        <img className="img-of-proj" src={ele.urlPic} alt="" />
                    </div>
                    <div className="proj-desc set-desc-order">
                        <p className="desc-heading">
                            {ele.title}
                        </p>
                          <span className="desc-span">{ele.slogan}</span>
                        <p className="proj-about">
                            {hide!=ele.id ?<>{cutWord(ele.desc)}<button onClick={()=>setHide(ele.id)}>
                                Read More</button></>:ele.desc}
                        </p>
                        <p className="proj-use">
                            {ele.techs.map((t,i)=><span key={i}>{t}</span>)}
                        </p>
                        <div className="proj-btn">
                           {ele.site && <a href={ele.site} target="_blank">
                            Open Website <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>}
                            <a href={ele.gitUrl} target="_blank"><button className="code-btn"><FontAwesomeIcon icon={faCode}/> Source Code</button></a>
                            <button className="play-btn" id={ele.vidUrl} 
                            onClick={ytOpen}><FontAwesomeIcon icon={faPlay} style={{pointerEvents:"none"}}/> Play</button>
                        </div>
                    </div>
                </div>)}
            </div>
            {vidOpen && <div className="full-vid">
                 <div className="react-player" ref={vref}>
           <ReactPlayer controls={true} 
          url={`https://www.youtube.com/watch?v=${vidOpen}`} width="100%" height="100%"/>
        </div>
        <p className="cross-vid"><FontAwesomeIcon icon={faXmark}/></p>
        </div>}
        </section>
    )
}
export default Project;