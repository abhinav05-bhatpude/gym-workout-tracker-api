const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    exercise: {
      type: String,
      required: true,
    },

    sets: {
      type: Number,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },

    muscleGroup: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
