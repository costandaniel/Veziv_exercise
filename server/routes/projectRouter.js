const express = require('express');

const router = express.Router();
const multer = require('multer');

const Project = require('../models/projectModel');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/create', upload.single('image'), async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = `http://localhost:5000/images/${req.file.originalname}`;
  const newProject = new Project({
    title,
    description,
    image,
  });
  await newProject.save();
  console.log('data sent');
  res.send({ title, description, image });
});
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
