const users = [
  {
    id: "0F8JIqi4zwvb77FGz6Wt",
    lastName: "Franklin",
    firstName: "Jamie",
    email: "jamie.franklin@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/98.jpg",
  },
  {
    id: "0P6E1d4nr0L1ntW8cjGU",
    lastName: "Peters",
    firstName: "Karen",
    email: "karen.peters@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    id: "1Lkk06cOUCkiAsUXFLMN",
    lastName: "Nelson",
    firstName: "Gabriel",
    email: "gabriel.nelson@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: "1OuR3CWOEsfISTpFxsG7",
    lastName: "Martinez",
    firstName: "Lucas",
    email: "lucas.martinez@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: "1pRsh5nXDIH3pjEOZ17A",
    lastName: "Wright",
    firstName: "Emma",
    email: "emma.wright@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "3JAf8R85oIlxXd58Piqk",
    lastName: "Murphy",
    firstName: "Ella",
    email: "ella.murphy@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "5aZRSdkcBOM6j3lkWEoP",
    lastName: "Gonzalez",
    firstName: "Antonio",
    email: "antonio.gonzalez@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "5tVxgsqPCjv2Ul5Rc7gw",
    lastName: "Simmons",
    firstName: "Betty",
    email: "betty.simmons@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    id: "6wy6UNkZueJfIUfq88d5",
    lastName: "Cole",
    firstName: "Nathan",
    email: "nathan.cole@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "7DbXNPWlNDR4QYVvFZjr",
    lastName: "Griffin",
    firstName: "Deborah",
    email: "deborah.griffin@example.com",
    title: "ms",
    picture: "https://randomuser.me/api/portraits/women/65.jpg",
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
  const id = generateRandomId(20);
  user["id"] = id;
  users.push(user);
}

// Function to update a user
function updateUser(id, newDetails) {
  const { email, firstName, lastName, picture, title } = newDetails;
  const result = getUserById(id);
  if (email) {
    result.email = email;
  }

  if (firstName) {
    result.firstName = firstName;
  }

  if (lastName) {
    result.lastName = lastName;
  }

  if (picture) {
    result.picture = picture;
  }

  if (title) {
    result.title = title;
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
