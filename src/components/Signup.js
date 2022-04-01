import React, {useState} from 'react';
// import signup from '../images/signup.png';
import logo from "../images/logo1.png";
import bgimg from '../videos/bgvideo1.mp4'
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillInstagram,  AiFillMail, AiFillFacebook ,AiFillLinkedin, AiFillYoutube, AiOutlineCloudSync} from "react-icons/ai";




const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email:"", phone:"",work:"", password:"", cpassword:""
  });
  
  let name, value;
  
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
  
    setUser({...user, [name] : value});
  }

  const PostData =  async(e) => {
      e.preventDefault();

      const {name, email, phone, work, password, cpassword} = user;

      const res = await fetch("/register", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          
          name, email, phone, work, password, cpassword
        
        })
      });

      const data = await res.json();

      if (DataTransfer.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");

      }else{
        window.alert("Registration Successfull");
        console.log("Registration Successfull");

        navigate("/login");
      }
  }

  return <>
  {/* <div class="background"> */}
  <video autoPlay loop muted style={{position: "absolute",

width: "100%",

left: "50%",

top: "50%",

height: "150%",

objectFit: "cover",

transform: "translate(-50%, -50%)",

zIndex: "-1"}}>
        <source
          src={bgimg}
          type="video/mp4"
        />
     
      </video>
  <div class="container">
  <br />
    <div class="screen">
    
      <div class="screen-header mt-5">
        
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
            <span>UP</span>
          </div>
          <div className="signup-image">
            {/* <figure>
                <img src={signup} alt="signup" />
            </figure> */}
            <br />
            <NavLink to = "/login" className="signup-img-link">I am already Registered</NavLink>
        </div>
          <div class="app-contact">TechSrijan'22</div>
        </div>
        <div class="screen-body-item1">
        
        <form method="POST" className='register-form' id='register-form'>
          <div class="app-form">
          
            <div class="app-form-group1">
                  <label htmlFor="name">
                      <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                  </label>
              <input class="app-form-control" type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Name" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="email">
                          <i class="zmdi zmdi-email material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}
                          placeholder="email" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="phone">
                          <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                          </label>
              <input class="app-form-control" placeholder="CONTACT NO" type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} />
            </div>
            <div class="app-form-group1">
            <label htmlFor="work">
                          <i class="zmdi zmdi-slideshow material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs}
                          placeholder="College" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="work">
                          <i class="zmdi zmdi-slideshow material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs}
                          placeholder="Branch" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="work">
                          <i class="zmdi zmdi-slideshow material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInputs}
                          placeholder="Year" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="password">
                          <i class="zmdi zmdi-lock material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}
                          placeholder="Your Password" />
            </div>
            <div class="app-form-group1">
            <label htmlFor="cpassword">
                          <i class="zmdi zmdi-lock material-icons-name"></i>
                          </label>
              <input class="app-form-control" type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}
                          placeholder="Confirm Password" />
            </div>
            <div class="app-form-group buttons">
              <input className="form-submit" type="submit" name="signup" id="signup" value="Register" onClick={PostData}/>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
           
          </div>
          </form>
        </div>   
        
      </div>
    </div>
    
  </div>
{/* // </div> */}
</>
};

export default Signup;
