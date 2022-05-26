import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  
  // to set and update the state of tasks
    const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "clean the house and setup",
    day: "May 11th at 11:00am",
    reminder: true,
  },
  {
    id: 2,
    text: "make morning food",
    day: "May 11th at 1:00pm",
    reminder: true,
  },
  {
    id: 3,
    text: "learn React and build task tracker",
    day: "May 11th at 4:00pm",
    reminder: false,
  },
])
  // Add Task
  const addTask = (task) => {
    // to make a id with a random num
    const id = Math.floor(Math.random() * 10000) + 1

    // create a new obj and add id and the take to it
    const newTask = {id, ...task}

    // the update the state of the tasks array
    setTasks([ ...tasks, newTask])
  }
  
  // Delete Task
  const deleteTask = (id) => {
    // to loop through the tasks array and select the task that does not match the id
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
   // to loop through the tasks array and checks if the id matches then toggle the reminder value
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: 
        !task.reminder} : task
          )
      )
  }

  return (
    <div>
      <Header onToggle={setShowAddTask} showAddTask={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      <Tasks  
        onToggle={toggleReminder}
        tasks={tasks} 
        onDelete={deleteTask} 
        /> 
      : "No Task to show"}
    </div>
  );
}

export default App;
