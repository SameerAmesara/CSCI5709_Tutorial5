const express = require("express");
const getAllUsers = require("./src/getAllUsers");
const updateUser = require("./src/updateUser");
const addUser = require("./src/addUser");
const getUser = require("./src/getUser");

const app = express();
app.use(express.json());

// GET all users
app.get("/users", getAllUsers.getAllUsers);

// Update given user
app.put("/update/:id", updateUser.update);

// Add new user
app.post("/add", addUser.add);

// Retrieve given user
app.get("/user/:id", getUser.user);

app.listen(6000, () => {
  console.log("Application is listening on port 6000.");
});
