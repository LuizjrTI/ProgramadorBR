const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validate = require("../controllers/validate");

const userController = {
  login: async (req, res) => {
    const selectedUser = await User.User.findOne({ email: req.body.email });
    if (!selectedUser) {
      return res.status(400).send("User not found");
    }
    const checkPassword = await bcrypt.compare(
      req.body.password,
      selectedUser.password
    );
    if (!checkPassword) {
      return res.status(400).send("Invalid email or password");
    }
    try {
      const token = jwt.sign(
        { id: selectedUser._id },
        process.env.TOKEN_SECRET,
        { expiresIn: 86400 }
      );
      res.header("auth-token", token).send(token);
      res.send("Login successful");
    } catch (error) {}
  },

  register: async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const selectedUser = await User.User.findOne({ email: req.body.email });
    if (selectedUser) {
      return res.status(400).send("User already exists");
    }
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(12);
      const encryptedPassword = await bcrypt.hash(password, salt);
      const user = {
        name,
        email,
        password: encryptedPassword,
      };
      const saveUser = await User.User.create(user);
      res.send(saveUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = userController;
