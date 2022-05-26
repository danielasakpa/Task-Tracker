import mongoose from "mongoose";

const tasksCollections = mongoose.Schema({
  text: String,
  day: String,
  reminder: {
        type: Boolean,
    }
});

const tasksCollection = mongoose.model('tasksCollection', tasksCollections);

export default tasksCollection;