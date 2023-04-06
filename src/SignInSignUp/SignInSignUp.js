import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';


function WithLocalStorage(){
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const phone=useRef()
    const prof=useRef()

    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)

    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    // const localPhone=localStorage.getItem("phone")
    // const localProf=localStorage.getItem("prof")

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
            }
        }

    useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
    })
    const handleClick=()=>{
        if(name.current.value&&email.current.value&&password.current.value&&prof.current.value&&phone.current.value)
        {
            localStorage.setItem("name",name.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("prof",prof.current.value)
            localStorage.setItem("phone",phone.current.value)
            alert("Account created successfully!!")
            window.location.reload()
        }
    }

    const handleSignIn=()=>{
        if(email.current.value==localEmail&&password.current.value==localPassword){
            localStorage.setItem("signUp",email.current.value)
            window.location.reload()
        }else{
            alert("Invalid Credentials")
        }
    }
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                    <strong>Companey Info</strong>
                    <br />
                    <h1>Hello {localName}, Use your stored data.</h1>
                    <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Password" type='password' ref={password} />
                    </div>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                    <h2>Sign Up</h2>
                    <div className="input_space">
                        <input placeholder="Name" type='text' ref={name} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Password" type='password' ref={password} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Phone Number" type='text' ref={phone} />
                    </div>
                    <div className="input_space">
                        <input placeholder="Profession" type='text' ref={prof} />
                    </div>
                    <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default WithLocalStorage;