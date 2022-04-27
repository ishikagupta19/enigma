import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import bgimg from '../videos/bgvideo1.mp4'
import { AiFillInstagram,  AiFillMail, AiFillFacebook ,AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const Leaderboard = () => {

  try {
    
  } catch (err) {
    console.log(err);
  }

  return <>
          {/* <div class="background"> */}
          <video autoPlay loop muted style={{position: "absolute",

width: "100%",

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
          <table class="table justify-content-center" style={{color: 'white'}}>
  <thead>
  <tr>
      <th scope="col">#Rank</th>
      <th scope="col">Name</th>
      <th scope="col">College</th>
      <th scope="col">Branch</th>
      <th scope="col">Year</th>
    
      <th scope="col">Level</th>
    </tr>
  </thead>
  <tbody>
  {
    Sdata.map((val)=>{
      return(
        <Item
        name={val.name}
        collegename={val.collegename}
        branch={val.branch}
        year={val.year}
        level={val.level}

        />
      )
    })
  }    
  </tbody>
</table>
     {/* </div> */}
    </>;
};

export default Leaderboard;