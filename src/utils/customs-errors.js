class InvalidNameError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidNameError";
  }
}

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

class InvalidEmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidEmailError";
  }
}

export { InvalidNameError, InvalidAgeError, InvalidEmailError };
