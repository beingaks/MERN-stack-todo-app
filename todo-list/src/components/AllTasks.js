import React,{useContext} from "react";
import TaskComponent from "./TaskComponent";
import myContext from '../StateManagement/ContextConfigure'

function AllTasks() {

  const {state, dispatch, ACTIONS} = useContext(myContext);
  console.log(state.todos)

  return (
    <>
       {state.todos.map(item=>{
          return(<TaskComponent item={item}/>);
       })}
    </>
  );
}

export default AllTasks;
