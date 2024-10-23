import userModel from "../models/user.model.js";
import { isValidEmail } from "../utils/helper.js";
import {
  InvalidNameError,
  InvalidAgeError,
  InvalidEmailError,
} from "../utils/customs-errors.js";

const getAllUsers = () => {
  return userModel.getAll();
};

const insertUser = (name, age, email) => {
  /*
    Client-side data validation
    We throw an error if something criteria is not met
        - None of the values should be empty
        - Age must be between 13 and 100
        - Email must be properly formatted
        - Name should be at least 2 characters long
    */
  if (name.length < 2 || name == null) {
    throw new InvalidNameError("Campo de nombre vacio o muy corto");
  }

  if (age < 13 || age > 100 || isNaN(age) || age == null) {
    throw new InvalidAgeError(
      "Campo de edad vacio, invalida o menor al minimo requerido"
    );
  }

  if (!isValidEmail(email) || email == null) {
    throw new InvalidEmailError("Campo de email vacio o formato invalido");
  }
  const user = userModel.create(name, age, email);
  userModel.insert(user);
  //Return the created user
  return user;
};

export default {
  getAllUsers,
  insertUser,
};
