import { CREATE_DATA, DELETE_DATA, UPDATETE_DATA } from "./ActionType"

const initialState = {
    item : []
}


const CrudReducer = (state=initialState,action) => {
    switch(action.type){
      //for Add data funtionality
        case CREATE_DATA:
            return {...state,item:[...state.item,action.payload]}  //overwrite krra item 2 same keys cant exits
            
      //for deleting data
        case DELETE_DATA:
            return {...state,item:[state.item.filter(users=>users.id !== action.payload)]}

      //for updating data
            case UPDATETE_DATA:
                return{...state,item:state.item.map(data=>data.id===action.payload.id? action.payload.newData:data)  }

            default : return state
                 
            
    }
 
}

export default CrudReducer;