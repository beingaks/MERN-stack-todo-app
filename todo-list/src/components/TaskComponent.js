import React,{useState,useContext} from 'react'
import {editData,getData,deleteData} from '../StateManagement/api'
import myContext from '../StateManagement/ContextConfigure'

function TaskComponent(props) {

  const [onOff,setOnOff] = useState(true)
  const [change,setChange] = useState(props.item.todo)

  const {state, dispatch, ACTIONS} = useContext(myContext);

const handleEdit = ()=>{
  setOnOff(!onOff)
  if(!onOff){
    if(!change){
      setChange(props.item.todo)
      return false;
    }
    let obj = {...(props.item),todo:change};
    editData(obj,dispatch,getData);

  }

}
const handleToggle = ()=>{
  let obj = {...(props.item),active:!props.item.active}
  editData(obj,dispatch,getData)
}

const handleDelete = ()=>{
  console.log()
  deleteData(props.item,dispatch,getData)
}

  return (
    <div className={props.item.active?"activeComp task-component":'innactiveComp task-component'}>
        {onOff?<p>{props.item.todo}</p>:<input type='text' value={change} onChange={(e)=>{setChange(e.target.value)}}/>}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggle}>Toggle</button>

    </div>
  )
}

export default TaskComponent