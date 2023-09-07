import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import {db} from "../../firebase";
import {collection, addDoc ,serverTimestamp,FieldValue} from "firebase/firestore";

function Contact()
{
  const sentmsg=collection(db,"portfolio_msh")
  const [writeMsg,setWritemsg]=useState({
    name:"",
    email:"",
    message:""
  })
   const[onError,setOnerror]=useState("")
   const[onsent,setOnsent]=useState(false);
   const[loader,setLoader]=useState(false)
  function cred(e)
{
  setWritemsg({...writeMsg,[e.target.name]:e.target.value})
  setOnerror("");
}

async function subtoDb(e)
{
  e.preventDefault();
  if(!writeMsg.name || !writeMsg.email || !writeMsg.message)
  {
    setOnerror("Please fill all the feilds!")
  }
  else
  {
    setLoader(true)
    try{
    await addDoc(sentmsg,{
      ...writeMsg,
      timestamp:serverTimestamp(FieldValue)
    })
    setOnsent(true)
    setWritemsg(({
    name:"",
    email:"",
    message:""
  }))
    }
  
  catch(err)
  {
    console.log(err)
    setOnerror("failed to send your response,Please try again")
  }
  setLoader(false)
 }
}

    return(
        <>
        <section id="contact-form">
            {!onsent && <div className="write-your">
              <p>Contact Me</p>
                <form >
                    <div className="input-group mb-3">
  <input
    type="text"
    name="name"
    className="contact-inp w-100 p-2"
    placeholder="Your Name"
    autoComplete="off"
    value={writeMsg.name}
    onChange={cred}
  />
</div>

<div className="input-group mb-3">
  <input
    type="email"
    name="email"
    className="contact-inp w-100 p-2"
    placeholder="Your Email"
    autoComplete="off"
    value={writeMsg.email}
    onChange={cred}
  />
</div>

<div className="input-group">
  <textarea
  className="contact-inp w-100 p-2"
  name="message"
    placeholder="Your Message..."
    autoComplete="off"
    value={writeMsg.message}
    onChange={cred}
  />
</div>
<div className="d-flex">
    <button className="btn-sub my-2" onClick={subtoDb} disabled={loader?true:false}>Submit</button>
    {loader && <div class="spinner-border text-light mx-2 my-3" role="status" 
    style={{width:"1.8em",height:"1.8em"}}>
  <span class="visually-hidden">Loading...</span>
</div>}
    <p className="err-msg my-2 ms-auto">{onError}</p>
    </div>
    </form>
        <hr style={{color:"#475b5a"}}/>
        <div className="mail-me">
              <p className="on-the-line">or you can mail me</p>
              <p className="my-mail"><FontAwesomeIcon icon={faEnvelope} size="lg"/> pranjal0409@gmail.com</p>
        </div>
            </div>}
                 {onsent && <div className="d-flex justify-content-center flex-column align-items-center err-div">
            <p><FontAwesomeIcon icon={faCircleCheck}/> Your message has been sent successfully ,I will get in touch with you ASAP.</p>
            <p style={{textDecoration:"underline",cursor:"pointer"}}
             onClick={()=>setOnsent(false)}>Go back</p>
            </div>}
        </section>
        </>
    )
}

export default Contact