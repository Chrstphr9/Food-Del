import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets} from "../../assets/assets"

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
                </div>
                <button> {currState=== "Sign Up"? "Create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
                </div>
                {currState=== "Login"
                ?<p>Create A New Account? <span onClick={()=>setCurrState("Sign up1")}>Click Here</span></p>
                :<p>Already HAve An Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
                }   
        </form>
    </div>
  )
}

export default LoginPopup