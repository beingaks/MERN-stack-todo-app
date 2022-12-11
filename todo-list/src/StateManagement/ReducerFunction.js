import ACTIONS from './ACTIONS'

const ReducerFunction = (state,action)=>{
    switch(action.type){
        case ACTIONS.READ:return{
            ...state,todos:action.payload
        }
        case ACTIONS.CREATE:return{
            ...state,todos:[...(state.todos),action.payload]
        }
        case ACTIONS.Log:return{
            ...state,logged:action.payload
        }
    }
}

export default ReducerFunction;