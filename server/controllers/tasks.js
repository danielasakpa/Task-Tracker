import tasksCollections from "../models/tasksCollections.js"


export const getPost = async (req, res) => {
  try {

    await tasksCollections.create({
      text: "work my dog",
      day: "May 20th 2:00pm",
      reminder: true,
    },
    {
      text: "work my dog",
      day: "May 20th 2:00pm",
      reminder: true,
    },
   {
      text: "work my dog",
      day: "May 20th 2:00pm",
      reminder: true,
    })
    const tasks = await tasksCollections.find({});
    
    res.status(200).json(tasks)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new tasksCollections(post)
  
  try {
   await newPost.save();
    
   await res.status(201).json(newPost.find({}))
  } catch (error) {
    res.status(402).json({ message: error.message})
  }
}