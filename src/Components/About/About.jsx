import "./About.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const logos=[
    {
        id:1,
        imagesrc:"/images/sym1.png",
        logo:"Html"
    },
       {
        id:2,
        imagesrc:"/images/sym2.png",
        logo:"Css"
    },
       {
        id:3,
        imagesrc:"/images/sym3.png",
        logo:"Javascript"
    },
       {
        id:4,
        imagesrc:"/images/sym4.png",
        logo:"React"
    },
       {
        id:5,
        imagesrc:"/images/sym5.png",
        logo:"Redux"
    },
    {
        id:51,
        imagesrc:"/images/sym11.png",
        logo:"Next.js"
    },
    {
        id:52,
        imagesrc:"/images/sym12.png",
        logo:"Typescript"
    },
       {
        id:6,
        imagesrc:"/images/sym6.png",
        logo:"Firbase"
    },
       {
        id:7,
        imagesrc:"/images/sym7.png",
        logo:"Bootstrap"
    },
       {
        id:8,
        imagesrc:"/images/sym10.jpg",
        logo:"Sass"
    },
       {
        id:9,
        imagesrc:"/images/sym9.jpg",
        logo:"Tailwind"
    },
       {
        id:10,
        imagesrc:"/images/sym8.png",
        logo:"Photoshop"
    }
]
function About()
{
    return(
        <>
        <section id="about-sec">
            <h1>About Me</h1>
                            <div className="intro-part">
                <div className="photo-msg">
                    <img className="your-img" src="/images/pkvabt.jpg" alt="" />
                </div>
              
                <div className="your-intro">
                    <p> 
                    I'm <span style={{fontWeight:"bolder"}}>Pranjal Kumar Verma</span> enthusiastic,self-taught and 
                    aspiring frontend developer from Lucknow ,India with proficiency in
                     Html CSS and JavaScript with modern 
                    frameworks like React .With these tech stack I have 
                    gathered hands on experience in building functional and 
                    responsive web application which you will see in my Project section.
                    </p>
                    <p>Currently I am looking for a opportunity to learn more and develop amazing apps with my skills.</p>
                    <p  className="mb-5"><span style={{fontWeight:700}}>EDUCATION: </span>Bachelor of Technology in Electronics and 
                    Communication Engineering (2022) University of Lucknow, Lucknow, India</p>
                </div>
            </div>
                <div className="all-img">
                    <hr className="line"/>
                        <h4 className="edu-skill">Skills</h4>
                    {logos.map((ele,i)=><div key={i} className="mt-3">
                    <div className="skill-info d-flex justify-content-center align-items-center">
                    <div className="img-div">
                        <img className="logo-img mx-1" src={ele.imagesrc} alt="" />
                        <p className="mt-3">{ele.logo}</p>
                    </div>
                    
                    </div>
                    </div>)}
                    </div>
        </section>
        </>
    )
}

export default About