
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');

  return (
    <div className="App">
      {/* Do not remove the main div */}
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
      <div style={{
        textAlign: 'center'
      }}>
        <input value={task} onChange={(e) => {
          setTask(e.target.value)
        }} type="text" />
        <button onClick={() => {
          setTaskList([...taskList, task]);
          setTask('');
        }}>Add Todo</button>
      </div>

      <ul className="todoList">
        {taskList.map((task, index) => {
          return <li key={index} className="todoItem">
            <p> {task} </p> <button onClick={() => {
              {
                setTaskList(taskList.filter((item, i) => {
                  return index !== i;
                }))
              }
            }}>Delete</button>
          </li>
        })}
      </ul>
    </div >
  )
}

export default App
