import mongoose from "mongoose";

const tasksCollections = mongoose.Schema({
  title: String,
  day: String,
  reminder: {
        type: Boolean,
    }
});

const tasksCollection = mongoose.model('tasksCollection', tasksCollections);

export default tasksCollection;