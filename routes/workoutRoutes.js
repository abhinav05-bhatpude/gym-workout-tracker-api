const express = require("express");

const {
    createWorkout,
    getWorkouts,
    getWorkoutById,
    updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.post("/", createWorkout);
router.get("/",getWorkouts);
router.get("/:id",getWorkoutById);
router.put("/:id",updateWorkout);

module.exports = router;