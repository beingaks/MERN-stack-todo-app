import React,{useContext} from "react";
import TaskComponent from "./TaskComponent";
import myContext from '../StateManagement/ContextConfigure'

function CompletedTasks() {

const {state,dispatch,ACTIONS} = useContext(myContext);

  return (
    <>
      {
        state.todos.map((item)=>{
          if(!item.active){
            return <TaskComponent item={item}/>
          }
        })
      }
    </>
  );
}

export default CompletedTasks;
