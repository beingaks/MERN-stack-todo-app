import React,{useContext,useEffect,useState} from "react";
import "../style.css";
import {  Link, Outlet } from "react-router-dom";
import myContext from '../StateManagement/ContextConfigure'
import {getData,createData} from '../StateManagement/api'


function Main(props) {

const [note,setNote] = useState('')
const [activeButton,setActiveButton] = useState(1); 

const {state,dispatch,ACTIONS} = useContext(myContext);

useEffect(()=>{
    console.log((JSON.parse(localStorage.getItem('user')))._id);
    getData(dispatch,(JSON.parse(localStorage.getItem('user')))._id)
},[])
  
const handleSubmit = ()=>{
  if(!note){
    return false;
  }
  let id = JSON.parse(localStorage.getItem('user'))._id
  let obj = {userId:id,todo:note,active:true};
  createData( obj,dispatch);
  setNote('');
}


  return (
    <>
      <div className="main">
        <h3>{JSON.parse(localStorage.getItem('user')).email}</h3>
        <div className="main-input">
          <input type="text" value={note} onChange={(e)=>{setNote(e.target.value)}}/>
          <button onClick={handleSubmit}>Create Note</button>
          <button onClick={props.Logout}>Logout</button>
        </div>
          <div className="main-nav">
            <Link to="/all" onClick={()=>setActiveButton(1)} className={activeButton===1?"activeButton":''}>All Tasks</Link>
            <Link to="/pending" onClick={()=>setActiveButton(2)} className={activeButton===2?"activeButton":''}>Pending Tasks</Link>
            <Link to="/done" onClick={()=>setActiveButton(3)} className={activeButton===3?"activeButton":''}>Completed Tasks</Link>
          </div>
          <div className="main-nav-list">
              <Outlet/>
          </div>
      </div>
    </>
  );
}

export default Main;
