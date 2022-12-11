import React, { useReducer } from "react";
import myContext from "./ContextConfigure";
import ACTIONS from "./ACTIONS";
import ReducerFunction from "./ReducerFunction";

const initialState = { todos: [],logged:false};

const UserContext = (props) => {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  return (
    <myContext.Provider value={{ state, dispatch, ACTIONS }}>
      {props.children}
    </myContext.Provider>
  );
};

export default UserContext;
