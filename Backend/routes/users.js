const router = require("express").Router();
const User = require("../model/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
router.post("/add", async (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
