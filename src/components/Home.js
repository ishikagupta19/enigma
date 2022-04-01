import React from 'react';
import bgimg from '../videos/bgvideo1.mp4'
import { AiFillInstagram,  AiFillMail, AiFillFacebook ,AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const Home = () => {
  return <>
  <div className="App">
  <video autoPlay loop muted style={{position: "absolute",

width: "100%",

alignItems: 'stretch',

left: "50%",

top: "50%",

height: "100%",

objectFit: "cover",

transform: "translate(-50%, -50%)",

zIndex: "-1"}}>
        <source
          src={bgimg}
          type="video/mp4"
        />
     
      </video>
{/* <div class="background"> */}

<div className='homepage'>
  <h1 className='pt-5'>ENIGMA</h1>
  <button>PLAY</button>
  {/* <h1>Hello</h1> */}
</div>

 
 
  </div>
{/* // </div> */}

    
  </>;
};

export default Home;
