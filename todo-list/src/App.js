import React,{useContext} from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./style.css";
import Main from "./components/Main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import CompletedTasks from "./components/CompletedTasks";
import RemainingTasks from "./components/RemainingTask";
import PrivateComponent from "./StateManagement/PrivateComponent";
import myContext from './StateManagement/ContextConfigure'



function App() {
  const {state,dispatch,ACTIONS} = useContext(myContext);


  const Logout = ()=>{
    console.log(state);
  
    localStorage.clear('user');
    dispatch({type:ACTIONS.Log,payload:false})
  
    console.log(state);
  }
  



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<Main Logout={Logout}/>}>
            <Route index element={<AllTasks />} />
            <Route path="all" element={<AllTasks />} />

            <Route path="pending" element={<RemainingTasks />} />
            <Route path="done" element={<CompletedTasks />} />
          </Route>
          </Route>
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
