const express = require("express");
const signInRouter = express.Router();
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

// LOGIN
signInRouter.post("/api/signin", async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({ email });
     if(!user){
            return res.status(400).json({msg : "User with this email does not exist!"});
        }

    const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword) {
            return res.status(400).json({msg : "Incorrect Password!"});
        }
    res.json(user);
  } catch (e) {
    res.status(500).json({error: e.message})
  }
});

module.exports = signInRouter;