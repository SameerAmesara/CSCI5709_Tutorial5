const fs = require("fs");
const users = require("./data/users.js");

async function getAllUsers(req, res) {
  try {
    res.json({
      message: "Users retrieved",
      success: true,
      users: users.users,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  getAllUsers,
};
