import React, { useState,useContext,useEffect} from "react";
import {SignUp} from '../StateManagement/api';
import myContext from '../StateManagement/ContextConfigure';
import {useNavigate} from 'react-router-dom'

function Signup() {

  useEffect(()=>{
    if(localStorage.length>0){
      navigate('/')
  }
  })

  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {state, dispatch, ACTIONS} = useContext(myContext);


  const handleSubmit = () => {
  
    if((!name)||(!email)||(!password)){
      alert('enter all details')

      return false
    }
  
    console.log("step 1", name, email, password);
   SignUp({name,email,password},navigate,dispatch);

  };

  return (
    <div className="sign-up">
      <div className="sign-up-item">
        <h1>Sign Up</h1>
        <div className="sign-up-item-input">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit}>login</button>
        <p> have account?<span onClick={()=>{navigate('/login')}}>login in</span></p>
      </div>
    </div>
  );
}

export default Signup;
