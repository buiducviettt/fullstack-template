const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');
router.get('/', CourseController.index);
router.post('/', CourseController.create);
module.exports = router;
