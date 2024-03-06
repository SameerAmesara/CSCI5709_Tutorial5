const users = [
  {
    id: "0F8JIqi4zw",
    firstName: "Jamie",
    email: "jamie.franklin@example.com",
  },
  {
    id: "0P6E1d4nr0",
    firstName: "Karen",
    email: "karen.peters@example.com",
  },
  {
    id: "1Lkk06cOUC",
    firstName: "Gabriel",
    email: "gabriel.nelson@example.com",
  },
  {
    id: "1OuR3CWOEs",
    firstName: "Lucas",
    email: "lucas.martinez@example.com",
  },
  {
    id: "1pRsh5nXDI",
    firstName: "Emma",
    email: "emma.wright@example.com",
  },
  {
    id: "3JAf8R85oI",
    firstName: "Ella",
    email: "ella.murphy@example.com",
  },
  {
    id: "5aZRSdkcBO",
    firstName: "Antonio",
    email: "antonio.gonzalez@example.com",
  },
  {
    id: "5tVxgsqPCj",
    firstName: "Betty",
    email: "betty.simmons@example.com",
  },
  {
    id: "6wy6UNkZue",
    firstName: "Nathan",
    email: "nathan.cole@example.com",
  },
  {
    id: "7DbXNPWlND",
    firstName: "Deborah",
    email: "deborah.griffin@example.com",
  },
];

// Function to get all users
function getAllUsers() {
  return users;
}

// Function to find a user by ID
function getUserById(id) {
  return users.find((user) => user.id === id);
}

//Function to generate Random Ids
function generateRandomId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function to add a new user
function addUser(user) {
  const id = generateRandomId(10);
  user["id"] = id;
  users.push(user);
}

// Function to update a user
function updateUser(id, newDetails) {
  const { email, firstName } = newDetails;
  const result = getUserById(id);
  if (email) {
    result.email = email;
  }

  if (firstName) {
    result.firstName = firstName;
  }

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    users[userIndex] = { ...users[userIndex], ...result };
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  users,
};
