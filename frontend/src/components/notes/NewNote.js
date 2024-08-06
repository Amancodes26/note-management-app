import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";

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
        border: `2px solid black`,
    },
}));

const NewNote = () => {
    const [group, setGroup] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleChange = (event) => {
        setGroup(event.target.value);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    return (
        <Box
            sx={{
                width: 300,
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 1,
                bgcolor: selectedColor || 'white', // Use selectedColor or default to white
            }}>
            <Typography variant="h6" gutterBottom>
                New Note
            </Typography>
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }} size="small">
                <InputLabel>Select a group</InputLabel>
                <Select
                    value={group}
                    onChange={handleChange}
                    label="Select a group">
                    {colors.map((color) => (
                        <MenuItem key={color.name} value={color.name}>
                            {color.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                }}
                size="small">
                {colors.map((color) => (
                    <ColorCircle
                        key={color.name}
                        color={color.hex}
                        onClick={() => handleColorSelect(color.hex)}
                        style={{
                            border:
                                selectedColor === color.hex
                                    ? "2px solid black"
                                    : `2px solid ${color.hex}`,
                        }}
                    />
                ))}
            </Box>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Content"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </Box>
        </Box>
    );
};

export default NewNote;
