import logo from './logo.svg';
import { useState, useEffect, use } from 'react';

function TodoList(){
  const [task, setTask] = useState("")
  const [taskItems,setTaskItems] = useState([])

  function addItem(event){
    event.preventDefault()
    const newItem = {
      key: Date.now(),
      text: task
    }
    setTaskItems(prevItems => [...prevItems, newItem])
  }
  return(
      <>
        <h1>Todo List</h1>
        <form onSubmit={addItem}>
          <label htmlFor='task'>Task?</label>
          <input id='task' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
          <button type='submit'>Add</button>
          
        </form>
        <TodoItems items={taskItems} />
      </>
  )
}
function TodoItems(props) {

   const todoItems = props.items;

   return (
      <ol>
         {todoItems.map((item) =>
            <li key={item.key}>
               {item.text}
            </li>
         )}
      </ol>
   );
}


function App() {
  return (
  
  <TodoList /> 
  
  
)

  


}



export default App;
