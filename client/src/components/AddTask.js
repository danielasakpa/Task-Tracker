import { useState } from "react"

const AddTask = ({onAdd}) => {
  // to set the set and update the state of the import
 const [text, setText] = useState("");
 const [day, setDay] = useState("");
 const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    // to prevent the app to submi to a page
    e.preventDefault()

    // to parform a validation on the form
    if (!text) {
      alert("Please add a task")
      return
    }

    // if it passes then call the onAdd function and pass a obj with the value of the inputs 
    onAdd({text, day, reminder})

    // reset the form
    setText("")
    setDay("")
    setReminder(false)
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className='form-control'>
      <label>Task</label>
      <input 
        type="text" 
        placeholder="Add Task" 
        value = {text} onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div className='form-control'>
      <label>Day & Time</label>
      <input 
        type="text" 
        placeholder="Add Day & Time" 
        value = {day} onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
      <label>Set reminder</label>
      <input 
        type="checkbox"
        checked={reminder}
        value = {reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask;