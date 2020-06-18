const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String,  required: [true, 'Exercise type required'] },
      name: { type: String,  required: [true, 'Exercise name required'] },
      distance: { type: Number },
      duration: { type: Number, required: [true, 'Exercise duration required'] },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
