const express = require('express');
const router = express.Router();
const { getBumps, createBump, getBumpById, deleteBumpById, editBumpById } = require('../controllers/bumps.controller')

router.get('/bumps/', getBumps);
router.get('/bumps/:id', getBumpById);
router.post('/bumps', createBump);
router.delete('/bumps/:id', deleteBumpById)
router.patch('/bumps/:id', editBumpById)

module.exports = router;
