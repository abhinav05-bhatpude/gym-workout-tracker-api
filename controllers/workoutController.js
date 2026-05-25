const Workout = require("../models/workoutModel");

// CREATE WORKOUT
const createWorkout = async (req, res) => {
  try {
    const { exercise, sets, reps, muscleGroup } = req.body;

    if (!exercise || !sets || !reps || !muscleGroup) {
      return res.status(400).json({
        message: "All workout fields are required",
      });
    }

    const workout = await Workout.create(req.body);

    res.status(201).json({
      message: "Workout created successfully",
      workout,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
  try {
    const { muscleGroup,exercise,sort } = req.query;

    let filter={};
    let sortOption = { createdAt : -1 };
    const limit = Number(req.query.limit) || 0;

    if(muscleGroup){
      filter.muscleGroup=muscleGroup;
    }
    if(exercise){
      filter.exercise={
        $regex:exercise,
        $options:"i",
      };
    }

    if(sort === "oldest"){
      sortOption = { createdAt: 1 };
    }

    const workouts = await Workout.find(filter).sort(sortOption).limit(limit);

    res.status(200).json({
      totalWorkouts: workouts.length,
      workouts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET WORKOUT BY ID
const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    res.status(200).json({
      workout,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//UPDATE
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//DELETE

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Workout deleted successfully",
    });
    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
