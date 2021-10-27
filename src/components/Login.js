import { useState } from "react";
import logo from "../images/kidsmagz.svg"
import "firebase/auth";

function Login({ SignInFunc, SignUpFunc}) {

    const [check, setCheck] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")

    function Signin() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const container = document.querySelector(".container");

        
        sign_in_btn.addEventListener('click', () => {
            container.classList.remove("sign-up-mode");
        });
    }

    function Signup() {
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");
        });
        
    }

    const emailChange = () => {
        if (check === false) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    const onSignIn = (e) => {
        e.preventDefault()
        console.log({email, password})
        SignInFunc({email, password})
    }
    
    const onSignUp = (e) => {
        e.preventDefault()
        console.log({username, email, password})
        SignUpFunc({username, email, password})
    }

    return (
        <div className="contain">
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">

                        {/* Sign In */}
                        <form onSubmit={onSignIn} className="sign-in">
                            <h2 className="title">Login</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <input type="submit" value="Login" className="btn solid"></input>
                        </form>
                        
                        {/* Sign Up */}
                        <form onSubmit={onSignUp} className="sign-up">
                            <h2 className="title">Register</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder={check ? 'Email' : 'Parents-Email'} id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="agelimit" name="agelimit" defaultChecked={check} onChange={emailChange}  ></input>
                                <label htmlFor="agelimit">I am above 13 years</label>
                            </div>
                            <input type="submit" value="Login" className="btn solid"></input>
                        </form>
                    </div>
                </div>

                {/* Panels */}
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <img src={logo} className="image" alt=""></img>
                            <h3>New Here, <strong id="sign-up-btn" onClick={Signup}>Register</strong></h3>
                        </div>

                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <img src={logo} className="image" alt=""></img>
                            <h3>One of us, <strong id="sign-in-btn" onClick={Signin}>Login</strong></h3> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
