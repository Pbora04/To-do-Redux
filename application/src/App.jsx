import './App.css'
import TaskInput from './Components/TaskInput/TaskInput'
import TaskList from './Components/TaskList/TaskList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App =()=>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <TaskInput/>}/>
        <Route path='/list' element={<TaskList/>
}/>

      </Routes>
    </BrowserRouter>
     
   </>
  )
}

export default App
