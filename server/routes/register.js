const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/Users");

router.use(express.json());

router.post(
  "/",
  body("firstName"),
  body("lastName"),
  body("email").isEmail(),
  body("password"),
  body("confirmPassword"),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { firstName, lastName, email, password, confirmPassword } =
        req.body;

      let repeatedEmail = await User.findOne({ email: email });

      if (repeatedEmail) {
        return res.status(400).json({
          status: "Failed",
          message: "User already exists",
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          status: "Failed",
          message: "Password do not match",
        });
      }

      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }

        if (hash) {
          repeatedEmail = await User.create({
            firstName,
            lastName,
            email,
            password: hash,
          });

          return res.status(201).json({
            status: "Success",
            message: "User registered successfully",
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
);

module.exports = router;
