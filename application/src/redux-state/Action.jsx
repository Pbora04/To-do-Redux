import { CREATE_DATA, DELETE_DATA, UPDATETE_DATA } from "./ActionType";

//fisrtly i creacted actions for different functionaliities

// Action is for adding data
const createData = (item)=>({
    type : CREATE_DATA,      
       payload : item
})
  
export {createData}

// Action is for deleting data
 const DeleteData = (id)=>({
      type : DELETE_DATA,
      payload : id
})
export {DeleteData}

// Action is for updating data
const UpdateData = (id,newData)=>({
    type : UPDATETE_DATA,
    payload : {
        id,
        newData
    }
})
export {UpdateData}