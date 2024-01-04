import React, { useState } from 'react'; // Import useState from React
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from './components/Stats'; // Import the Stats component

function App() {
  const [toDoList, setToDoList] = useState([]);


  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };
  function deletTask(deletTaskName){
    setToDoList(toDoList.filter(task=> task.
      taskName !== deletTaskName));
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) =>
     prevToDoList.map((task) =>
     task.taskName === taskName ? { ...task,
    checked: !task.checked } : task,
    ),
    );
  }
  
  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Task Master📝</h1>

        <TaskInput addTask={addTask} />
        
        <div className="toDoList">
          <span>To do 📚</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key}
              deletTask={deletTask} toggleCheck=
              {toggleCheck} />
            ))}
          </ul>
          {toDoList.length ===0? (
            <p className='notify'>You are Done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
