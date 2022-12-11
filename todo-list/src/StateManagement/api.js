import ACTIONS from "./ACTIONS";


const SignUp=async (obj,navigate,dispatch)=>{
    let data = await fetch('http://localhost:5000/signup',{
        method: "post",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        }
    })
    data = await data.json();
    if(data){
      localStorage.setItem('user',JSON.stringify(data));
      dispatch({type:ACTIONS.Log,payload:true})
      navigate('/')
    }
}

const LogIn=async (obj,navigate,dispatch)=>{
    let data = await fetch('http://localhost:5000/login',{
        method: "post",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        }
    })
    data = await data.json();
    if(data){
      dispatch({type:ACTIONS.Log,payload:true})
      localStorage.setItem('user',JSON.stringify(data));
      navigate('/')
    }
   
}

const getData =async(dispatch,id)=>{
    let data = await fetch(`http://localhost:5000/read/${id}`)
    data = await data.json();
    dispatch({type:ACTIONS.READ,payload:data})
    console.log(data)
}
const createData = async(obj,dispatch)=>{
  console.log(obj)
  let data = await fetch('http://localhost:5000/write',{
    method:"post",
    body:JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  })
  data = await data.json();
  console.log(data)
  dispatch({type:ACTIONS.CREATE,payload:data})
}

const editData = async(obj,dispatch,getData)=>{
    let data =await fetch(`http://localhost:5000/update/${obj._id}`,{
      method:"put",
      body:JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
    data = await data.json();
    if(data){
      getData(dispatch,obj.userId);

    }
}

const deleteData =async (obj,dispatch,getData)=>{
  let data = await fetch(`http://localhost:5000/deleteData/${obj._id}`,{
    method:'delete'
  })
  data = await data.json()
  if(data){
    getData(dispatch,obj.userId);

  }

}

export {SignUp,LogIn,getData,createData,editData,deleteData};