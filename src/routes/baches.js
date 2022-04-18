const express = require('express');
const router = express.Router();
const { getBaches, createBache, getBacheById, deleteBacheById, editBacheById } = require('../controllers/baches.controller')

router.get('/baches', getBaches);
router.get('/baches/:id', getBacheById);
router.post('/baches', createBache);
router.delete('/baches/:id', deleteBacheById)
router.patch('/baches/:id', editBacheById)

module.exports = router;
