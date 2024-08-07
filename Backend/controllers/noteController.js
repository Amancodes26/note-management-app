const Note = require('../models/Note');

// Create a new note
exports.createNote = async (req, res) => {
    const { group, text, color } = req.body;
    try {
        const newNote = new Note({
            group,
            text,
            color,
            user: req.user.id
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a note
exports.updateNote = async (req, res) => {
    const { group, text, color } = req.body;
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        note.group = group || note.group;
        note.text = text || note.text;
        note.color = color || note.color;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {

    try {
        console.log('Deleting note with ID:', req.params.id);
        const note = await Note.findById(req.params.id);
        if (!note) {
            console.log('Note not found');
            return res.status(404).json({ msg: 'Note not found' });
        }
        if (note.user.toString() !== req.user.id) {
            console.log('User not authorized');
            return res.status(401).json({ msg: 'User not authorized' });
        }
        await Note.findByIdAndDelete(req.params.id);
        console.log('Note removed');
        res.json({ msg: 'Note removed' });
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
