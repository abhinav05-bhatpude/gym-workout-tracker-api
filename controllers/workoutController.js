const Workout = require("../models/workoutModel");

const createWorkout = async (req, res) => {

    res.send("Create Workout Route");
};

module.exports = {
    createWorkout,
};