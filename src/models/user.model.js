//User model
class User {
  constructor(name, age, email) {
    (this.name = name), (this.age = age), (this.email = email);
  }
}

let users = [];

//Functions of the model

const getAll = () => {
  return users;
};

const insert = (user) => {
  users.push(user);
  console.log(users);
};

const create = (name, age, email) => {
  return new User(name, age, email);
};

export default {
  User,
  getAll,
  insert,
  create,
};
