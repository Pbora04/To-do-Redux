import { useSelector } from 'react-redux';
import './TaskList.css';
// import {}
const TaskList = () => {
  const item = useSelector(state=>state.item)
 
  return (
   <>
   <div className='main'>
   <h3> MY TO-DO LIST</h3>
   <ul>
   {
    item.map((item,i)=>{
      return <li key={i} style={{color:'white'}}>
      <input type='checkbox' />  {item.task}
      </li>
    })

   }
   </ul>
   </div>
   </>
  )
}

export default TaskList