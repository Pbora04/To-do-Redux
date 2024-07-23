import { useState } from 'react';
import './Taskinput.css'
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData, UpdateData, createData } from '../../redux-state/Action';
import { useNavigate } from 'react-router-dom';

const TaskInput = () => {
  const dispatch = useDispatch()
  const item = useSelector(state=>state.item)

  //for storing data in localstorage

   if(item){
        localStorage.setItem('user' , JSON.stringify(item))
   }

  const navigate = useNavigate()

  const[inputValue,setInputvalue]=useState("")//created this state to store my data from my task input 
  const [ updatedData,setUpdatedData]=useState("") //created this state to store my data from my update tast input 
  const[updatedLogic,setUpdatedLogic]=useState(null)  // this state is used for logic of update's input after update button click 

  //funtion handling "add" button funtionalities
const HandleCreate= ()=>{
    dispatch(createData({id:Date.now(),task:inputValue}))

    setInputvalue("")

}
  //funtion handling "delete" button funtionalities and sending payload to my delete's action

const HandleDelete=(id)=>{
dispatch( DeleteData(id))
}

//funtion handling add button funtionalities
const HandleUpdate=(id)=>{
    setUpdatedLogic(id)
}

//funtion handling update button funtionalities and sending payload to my update's action
const updateFunc2=()=>{
    dispatch(UpdateData(updatedLogic,{id:updatedLogic,task:updatedData}))
    setUpdatedLogic(null)
    setUpdatedData("")
}

    
  return (
   <div className='home'>
   <div className='home-intro'>
   <div className='home-intro-left'>
    <p>Hello! User </p>
    </div>
    <div className='home-intro-right'>
<IoMdNotifications/>
    </div>
   </div>
 
    <div className='home-middle'>
    <button style={{color:'white'}}  onClick={()=>navigate('/list')}>To-do List</button> 
        <h2>Add Task</h2> 
         <input style={{color:'white'}} type='text' placeholder='enter your task' value={inputValue} onChange={(e)=>{setInputvalue(e.target.value)}} required/>
        <button className='buttons' style={{color:'green'}} onClick={()=>HandleCreate()}> +Add</button>
        <ul>
        {
          item.map((users,i)=>{
             return <li key={i}>   <input type='checkbox' /> {users.task}
             <button className='buttons' style={{color:'blue'}} onClick={()=>HandleUpdate(users.id)}>update</button>
             <button className='buttons' style={{color:'red'}} onClick={()=>HandleDelete(users.id)}>delete</button></li>
          })
         }
        </ul>
        {updatedLogic && <>
            <input type='text' placeholder='enter task'  value={updatedData} onChange={(e)=>setUpdatedData(e.target.value)} style={{color:'white'}}/>
            <button className='buttons' style={{color:'white'}} onClick={()=>updateFunc2()}>Update</button>
        </>}

    </div>
   
   </div>
  )
}

export default TaskInput