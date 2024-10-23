import userService from "../services/user.service.js";

const returnAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json(users);
};

const insertNewUser = (req, res) => {
  const { name, age, email } = req.body;
  try {
    const user = userService.insertUser(name, age, email);
    //Created successfully
    res.status(201).json({ user: user });
  } catch (err) {
    //Bad request (invalid data)
    return res.status(400).json({ error: err.message });
  }
};

export default {
  returnAllUsers,
  insertNewUser,
};
