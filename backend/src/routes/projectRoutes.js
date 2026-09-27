const express = require('express');
const {
  getProjects,
  getFeaturedProjects,
  getProjectById,
} = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

module.exports = router;
