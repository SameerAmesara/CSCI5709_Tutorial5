const users = require("./data/users");

async function add(req, res) {
  const userData = req.body;
  users.addUser(userData);
  try {
    res.status(200).json({
      message: "User added",
      success: true,
    });
  } catch (error) {
    response.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  add,
};
