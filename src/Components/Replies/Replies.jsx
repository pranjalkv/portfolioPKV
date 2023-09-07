import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";

function Replies()
{
  const pass=import.meta.env.VITE_KEY
    const repl=collection(db,"portfolio_msh")
    const[pin,setPin]=useState("");
    const [allRepl,setAllRepl]=useState([])
    useEffect(()=>{
        async function getRepl()
        {
            let fireRepl=await getDocs(repl)
            setAllRepl(fireRepl.docs.map((doc)=>doc.data()))
        }
        getRepl()
    },[])
    function timeMsg(timecard)
    { 
        if (!timecard || typeof timecard !== 'object') {
    return <p>data not available</p>;
  }
  const {seconds}=timecard
   let options = {
 	year: 'numeric',
 	month: 'long',
 	day: 'numeric',
    hour:"numeric",
    minute:"numeric"
 };

  const timestampDate = new Date(seconds * 1000); 
  const formattedDate = timestampDate.toLocaleDateString("en-GB",options);
  return formattedDate;
}

function handlePin(e)
{
setPin(e.target.value)
}
console.log(allRepl);
    return(
        <section id="reply" className='p-4 w-100'>
            {pin!=pass ? <div className='w-100' style={{marginTop:"16%"}}>
                <label htmlFor="" className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <img src="/images/newIco.ico" alt="" style={{width:"45px",height:"45px"}} />
                    <input type="password" className='w-25 mt-2 p-1' value={pin} placeholder='Enter Security Key' 
                    onChange={handlePin}/>
                </label>
            </div>:
            <div className="row row-cols-1 row-cols-md-3 g-4">
  {allRepl.map((ele,i)=><div className="col key={i}">
    <div className="card h-100">
        <div className='d-flex justify-content-between'>
        <h2 className='mx-3'>{ele?.name}</h2>
        <h4 className='mt-2 mx-2'>{i+1}</h4>
        </div>
      <div className="card-body">
        <h5 className="card-title">{ele?.email}</h5>
        <p className="card-text">
         {ele?.message}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between w-100">
        <small className="text-body-secondary">{timeMsg(ele.timestamp)}</small>
       <label htmlFor=""><input type='checkbox' className='mt-2' /> Read</label> 
      </div>
    </div>
  </div>)}
</div>}

        </section>
    )
}

export default Replies