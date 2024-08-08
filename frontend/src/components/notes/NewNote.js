import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { v4 as uuidv4 } from 'uuid';

const colors = [
    { name: "Pink", hex: "#fa9fba" },
    { name: "Green", hex: "#8AC256" },
    { name: "Blue", hex: "#97d2fb" },
    { name: "Orange", hex: "#fd9873" },
    { name: "Purple", hex: "#B89CC8" },
];

const ColorCircle = styled("div")(({ theme, color }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: color,
    cursor: "pointer",
    margin: theme.spacing(0.5),
    border: `2px solid ${color}`,
    "&:hover": {
        border: `2px solid white`, // Lighter border on hover
    },
}));

const NewNote = ({ onCreate, initialTitle = '', initialContent = '', initialColor = '' }) => {
    // Default to "Pink" if initialColor is not provided
    const defaultColor = colors[0].hex;
    const [selectedColor, setSelectedColor] = useState(initialColor || defaultColor);
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    // Synchronize `selectedColor` if `initialColor` changes
    useEffect(() => {
        setSelectedColor(initialColor || defaultColor);
    }, [initialColor, defaultColor]);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleCreateNote = () => {
        if (!title || !content) return;

        const newNote = {
            color: selectedColor || 'white',
            content,
            id: uuidv4(),
            title
        };

        fetch('https://note-management-app-orpin.vercel.app/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token'), // Add token to headers
            },
            body: JSON.stringify(newNote),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            onCreate(newNote);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setTitle("");
        setContent("");
        setSelectedColor(defaultColor); // Reset to default color
    };

    return (
        <Box
            sx={{
                width: 300,
                p: 2,
                border: "1px solid #444", // Darker border for dark mode
                borderRadius: 1,
                bgcolor: '#333', // Dark mode background color
                borderTopRightRadius: "15px"
            }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                {initialTitle ? 'Edit Note' : 'New Note'}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                }}
                size="small">
                {colors.map((color) => (
                    <ColorCircle
                        key={color.hex}
                        color={color.hex}
                        onClick={() => handleColorSelect(color.hex)}
                        style={{
                            border:
                                selectedColor === color.hex
                                    ? "3px solid white"
                                    : `2px solid ${color.hex}`,
                            transform: selectedColor === color.hex ? 'scale(1.3)' : 'scale(1)', // Scale up the selected color
                            transition: 'transform 0.2s ease-in-out', // Smooth transition for scaling
                        }}
                    />
                ))}
            </Box>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2, bgcolor: '#444', input: { color: 'white' }, label: { color: 'white' } }}
            />
            <TextField
                fullWidth
                label="Content"
                multiline
                rows={4}
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ mb: 2, bgcolor: '#444', input: { color: 'white' }, label: { color: 'white' } }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={() => onCreate(null)} sx={{ borderColor: 'white', color: 'white' }}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleCreateNote}>
                    {initialTitle ? 'Update' : 'Create'}
                </Button>
            </Box>
        </Box>
    );
};

export default NewNote;
