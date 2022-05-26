import tasksCollections from "../models/tasksCollections.js"



export const getPost = async (req, res) => {
  try {
//      tasksCollections.find({}, (error, tasksCollection) =>{
//    tasksCollection.forEach(x => {
//      tasksCollections.findByIdAndDelete(x.id, (error, tasksCollection) =>{
//       console.log(error,tasksCollections)
//       })
//    })
// })

    res.set('Access-Control-Allow-Origin', '*');

    const tasks = await tasksCollections.find({});
    
    res.status(200).json(tasks)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}







export const createPost = async (req, res) => {
  
try {
    console.log(res.body)
  
  const task = new tasksCollections({
      text: req.body.text,
      day: req.body.day,
      reminder: req.body.reminder,
    })
  
	await task.save()
      
   await res.status(201).json(task)
  } catch (error) {
    res.status(402).json({ message: error.message})
  }
}




export const upDateTask = async (req, res) => {
  
  try {
    
    const task = await tasksCollections.findOne({ _id: req.params.id })
    
    if (req.body.reminder) {
			task.reminder = req.body.reminder
		}

    await task.save()
    
   await res.status(201).json(task)
  } catch (error) {
    res.status(402).json({ message: error.message})
  }
}




export const deleteTask = async (req, res) => {
    
  try {
 await tasksCollections.deleteOne({ _id: req.params.id })
    
   await res.status(201)
  } catch (error) {
    res.status(402).json({ message: error.message})
  }
}