import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import About from "./components/About"
import Footer from "./components/Footer"



function App() {

   // to set and update the state of tasks
    const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromserver = await fetchTasks()
      setTasks(tasksFromserver)
    }

    getTasks();
  }, [])

  // Fetch Tasks
      const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()

     return data;
    }
  // Fetch Task
      const fetchTask = async (id) => {
      const res = await
        fetch(`http://localhost:5000/tasks/${id}/`)
      const data = await res.json()

      return data;

    }

  

  // Add Task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data])
    
    // to make a id with a random num
    // const id = Math.floor(Math.random() * 10000) + 1

    // create a new obj and add id and the take to it
    // const newTask = {id, ...task}

    // the update the state of the tasks array
    // setTasks([ ...tasks, newTask])
  }
  
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}/`, {
    method: "DELETE",
  });
    // to loop through the tasks array and select the task that does not match the id
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    
    const taskToToggle = await fetchTask(id)
    
    const updTask = {...taskToToggle, reminder: 
        !taskToToggle.reminder}

    const res = await  fetch(`http://localhost:5000/tasks/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
    });

    const data = await res.json();

   // to loop through the tasks array and checks if the id matches then toggle the reminder value
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: 
        data.reminder} : task
          )
      )
  }

  return (
    <Router>
    <div>
      <Header onToggle={setShowAddTask} showAddTask={showAddTask}/>
      <Routes> 
      <Route exact path="/" element={
      <>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      <Tasks  
        onToggle={toggleReminder}
        tasks={tasks} 
        onDelete={deleteTask} 
        /> 
      : "No Task to show"}
      </>
      } 
      >
    </Route>
    <Route path="/about" exact element={<About />} />
    </Routes> 
    <Footer />
    </div>
   </Router>
  );
}

export default App;
