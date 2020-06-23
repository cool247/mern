const router = require("express").Router();
const Exercise = require("../model/exercise.model");

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/add", async (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  try {
    const savedExercise = await newExercise.save();
    res.json(savedExercise);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json(" Exercise deleted");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
router.post("/update/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    await exercise.save();
    res.json("updated!");
  } catch (err) {
    res.status(400).json("Error : " + err);
  }
});

module.exports = router;
