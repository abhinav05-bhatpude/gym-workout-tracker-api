const Workout = require("../models/workoutModel");

const createWorkout = async (req, res) => {

    try {

        const workout = await Workout.create(req.body);

        res.status(201).json(workout);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

const getWorkouts=async (req,res)=>{

    try{
        const workout = await Workout.find();

        res.status(200).json(workouts);
    } catch(error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

module.exports = {
    createWorkout,
    getWorkouts,
};