const express = require("express");
const dotenv = require("dotenv");

const workoutRoutes = require("./routes/workoutRoutes");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {

    console.log(`${req.method} ${req.url}`);

    next();
});

const PORT = process.env.PORT || 5000;

// Home Route
app.get("/", (req, res) => {
    res.send("Gym Workout Tracker API Running");
});

// Workout Routes
app.use("/api/workouts", workoutRoutes);

// Route Not Found Middleware
app.use((req, res) => {

    res.status(404).json({
        message: "Route not found",
    });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});