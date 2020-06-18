const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, trim: true, required: [true, 'Exercise type required'] },
      name: { type: String, trim: true,  required: [true, 'Exercise name required'] },
      distance: { type: Number },
      duration: { type: Number, required: [true, 'Exercise duration required'] },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
    },
  ],
  totalDuration: {
      type: Number,
      default: 0,
      required: true,
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
