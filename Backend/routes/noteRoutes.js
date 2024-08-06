const express = require('express');
const router = express.Router();
const {
    createNote,
    getNotes,
    updateNote,
    deleteNote
} = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

// Create note
router.post('/', authMiddleware, createNote);

// Get notes
router.get('/', authMiddleware, getNotes);

// Update note
router.put('/:id', authMiddleware, updateNote);

// Delete note
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;
