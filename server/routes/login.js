const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const process = require("process");
require("dotenv").config();

const User = require("../models/Users");
const secret = process.env.SECRET;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let SESSIONID = "";

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ email: email });

    if (!userData) {
      return res.status(400).json({
        status: "Failed",
        message: "User does not exists",
      });
    }

    bcrypt.compare(password, userData.password, async (err, result) => {
      if (err) {
        return res.status(400).json({
          status: "Error occured during pasword comparision",
          error: err.message,
        });
      }

      if (result) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: userData._id,
          },
          secret
        );

        SESSIONID = token;

        return res.status(200).json({
          status: "Success",
          message: "Login Successful",
          token,
        });
      } else {
        return res.status(400).json({
          status: "Failed",
          message: "Invalid credentials! Please provide valid email/password",
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "Error catched",
      error: e.message,
    });
  }
});

router.get("/get-current-user", (req, res) => {
  const sessionId = req.query.sessionId;
  console.log("from get-current-uesr sessionId:", sessionId);
  console.log("from get-current-uesr SESSIONID:", SESSIONID);
  console.log(sessionId === SESSIONID);
  if (sessionId === SESSIONID) {
    res.status(200).send(true);
  } else {
    res.status(401).send(false);
  }
});

module.exports = router;
