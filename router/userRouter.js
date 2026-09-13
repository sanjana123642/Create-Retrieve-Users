const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

// POST /api/users
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        console.log("User added successfully");

        res.status(201).json({
            message: "User added successfully",
            user: user
        });

    } catch (error) {
        console.log("Error adding user:", error.message);

        res.status(500).json({
            message: "Error adding user",
            error: error.message
        });
    }
});


// GET /api/users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        console.log("Users retrieved successfully");

        res.status(200).json(users);

    } catch (error) {
        console.log("Error retrieving users:", error.message);

        res.status(500).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
});

module.exports = router;