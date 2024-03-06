const users = require("./data/users");

async function user(req, res) {
  const user = users.getUserById(req.params.id);
  if (user) {
    res.status(200).json({
      success: true,
      user: user,
    });
  } else {
    res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
}

module.exports = {
  user,
};
