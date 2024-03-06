const users = require("./data/users.js");

async function update(req, res) {
  const { id } = req.params;
  const success = users.updateUser(id, req.body);
  if (success) {
    res.status(200).json({
      message: "User updated",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
}

module.exports = {
  update,
};
