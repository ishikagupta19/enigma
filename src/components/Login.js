import React from 'react';
// import signin from '../images/signin.png';
import logo from "../images/logo1.png";
import { NavLink } from 'react-router-dom';
import bgimg from '../videos/bgvideo1.mp4'
import { AiFillInstagram,  AiFillMail, AiFillFacebook ,AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const Login = () => {
  return ( <>
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
  <div class="container">
    <div class="screen login-screen">
      <div class="screen-header">
       
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>SIGN</span>
            <span>IN</span>
          </div>
            <br />
            <NavLink to = "/signup" className="signin-img-link" >Create an account</NavLink>
        
          <div class="app-contact">TechSrijan'22</div>
        </div>
        <div class="screen-body-item login-class">
          <div class="app-form">
           
            <div class="app-form-group login-sec">
              <input class="app-form-control text" type="text" name="email" id="email" autoComplete="off"
                          placeholder="email" />
            </div>
            
            <div class="app-form-group login-sec">
              <input class="app-form-control text" type="password" name="password" id="password" autoComplete="off"
                          placeholder="Password" />
            </div>
           
            <div class="app-form-group buttons login-sec">
              <button class="app-form-button" type="submit" name="signup" id="signup">Sign In</button>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
          </div>
        </div>   
      </div>
    </div>
    
  </div>
{/* // </div> */}
  </> 
  )
};

export default Login;
