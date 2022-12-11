import React, { useState,useContext,useEffect} from "react";
import myContext from '../StateManagement/ContextConfigure'
import {useNavigate} from 'react-router-dom'
import { LogIn } from "../StateManagement/api";


function Login() {

  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
  }
  })

  const navigate = useNavigate()

  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const {state, dispatch, ACTIONS} = useContext(myContext);

  const handleSubmit = () => {

    if((!email)||(!password)){
      alert('enter all details')
      return false
    }

    console.log(state)
    console.log("step 1", email, password);
   LogIn({email,password},navigate,dispatch);
  
  };


 
  

  return (
    <div className="log-in">
      <div className="log-in-item">
        <h1>Login</h1>
        <div className="log-in-item-input">
            <input type='email' placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type='password' placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        </div>
        <button onClick={handleSubmit}>login</button>
        <p>don't have account?<span onClick={()=>{navigate('/signup')}}>sign up</span></p>
      </div>
    </div>
  );
}

export default Login;
