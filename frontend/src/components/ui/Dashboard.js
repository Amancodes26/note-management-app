import React, { useState } from "react";
import Note from "../notes/Note";
import newNote from "../../utils/icons/new-note.svg";
import NewNote from "../notes/NewNote";
import Button from '@mui/material/Button';

// Define color options
const colorOptions = ['#fa9fba', '#8AC256', '#97d2fb', '#fd9873', '#B89CC8'];

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteEnable, setNewNoteEnable] = useState(false);
    const [highlightedNoteId, setHighlightedNoteId] = useState(null);
    const [editingNote, setEditingNote] = useState(null);
    const [selectedColor, setSelectedColor] = useState(''); // State for selected color

    const addNote = () => {
        setNewNoteEnable(!newNoteEnable);
        if (editingNote) {
            setEditingNote(null); 
        }
    };

    const handleCreateOrUpdateNote = (note) => {
        if (note) {
            if (editingNote) {
                // Update existing note
                setNotes(notes.map(n => n.id === editingNote.id ? { ...note, x: editingNote.x, y: editingNote.y } : n));
                setEditingNote(null);
            } else {
                // Create new note at default position (e.g., x: 50, y: 50)
                setNotes([{ ...note, x: 50, y: 0 }, ...notes]);
                setHighlightedNoteId(note.id);
            }
        }
        setNewNoteEnable(false); // Close the new note form
        sendNotesToBackend(); // Send updated notes to backend
    };

    const handleEditNote = (id) => {
        const noteToEdit = notes.find(n => n.id === id);
        setEditingNote(noteToEdit);
        setNewNoteEnable(true); // Open new note form
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(n => n.id !== id));
        sendNotesToBackend(); // Send updated notes to backend
    };

    const handleDragNote = (id, x, y) => {
        setNotes(notes.map(note => note.id === id ? { ...note, x, y } : note));
        sendNotesToBackend(); // Send updated notes to backend
    };

    const handleColorFilter = (color) => {
        setSelectedColor(color);
        setHighlightedNoteId(null); // Clear highlight when filtering by color
    };

    const clearColorFilter = () => {
        setSelectedColor('');
        setHighlightedNoteId(null); // Clear highlight when removing filter
    };

    const filteredNotes = selectedColor
        ? notes.filter(note => note.color === selectedColor)
        : notes;

    const sendNotesToBackend = async () => {
        console.log("uncomment below post request");
        // try {
        //     const response = await axios.post('/api/notes', { notes });
        //     console.log('Notes saved successfully:', response.data);
        // } catch (error) {
        //     console.error('Error saving notes:', error);
        // }
    };

    return (
        <div className="bg-gray-700 min-h-[calc(100vh-64px)] max-w-[100vw] overflow-x-auto relative flex flex-col items-center">
            <p className="text-gray-200 text-5xl py-4 font-bold">Sticky Notes</p>

            {/* Color Filter UI */}
            <div className="mb-4">
                <div className="flex space-x-2">
                    {colorOptions.map((color) => (
                        <Button
                            key={color}
                            className={`w-12 h-12 rounded-full transition-transform duration-300 ease-in-out ${
                                selectedColor === color ? 'scale-110' : 'scale-100'
                            } hover:scale-110`}
                            style={{
                                backgroundColor: color,
                                color: '#fff',
                            }}
                            onClick={() => handleColorFilter(color)}
                        />
                    ))}
                    <Button
                        className="w-12 h-12 rounded-full bg-gray-200 text-black transition-transform duration-300 ease-in-out hover:scale-110"
                        onClick={clearColorFilter}
                    >
                        All
                    </Button>
                </div>
            </div>

            <div className="relative w-full h-full">
                {filteredNotes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        initialTitle={note.title}
                        initialDescription={note.content}
                        initialX={note.x}
                        initialY={note.y}
                        style={{ backgroundColor: note.color }}
                        isHighlighted={note.id === highlightedNoteId}
                        onEdit={handleEditNote}
                        onDelete={handleDeleteNote}
                        onDrag={handleDragNote}
                    />
                ))}
                <div className="fixed right-5">
                    <div
                        type="button"
                        className="fixed right-5"
                        onClick={addNote}>
                        <img
                            src={newNote}
                            alt="New Note"
                            className={`w-8 h-8 hover:opacity-50 transition-all cursor-pointer ${newNoteEnable ? 'rotate-45' : ''}`}
                        />
                    </div>
                    {newNoteEnable && 
                        <NewNote 
                            onCreate={handleCreateOrUpdateNote}
                            initialTitle={editingNote ? editingNote.title : ''}
                            initialContent={editingNote ? editingNote.content : ''}
                            initialColor={editingNote ? editingNote.color : ''}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
