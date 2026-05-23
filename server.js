const express = require("express");
const dotenv = require("dotenv");

const workoutRoutes = require("./routes/workoutRoutes");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Gym Workout Tracker API Running");
});

app.use("/api/workouts", workoutRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});