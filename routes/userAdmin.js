const { json } = require("express");
const express = require("express");
const User = require("../models/user");
const router = express.Router();

// User Update
router.put("/api/user/update/:id", async (req, res) => {
  try {
    const { name, email, address, type } = req.body;
    const { id } = req.params;
    let user = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, address, type }
    );
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get User
router.get("/api/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get List of User
router.get("/api/userprofile/list", async (req, res) => {
  try {
    let user = await User.find({});
    // res.json({ userList: user });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete User
router.delete("/api/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
