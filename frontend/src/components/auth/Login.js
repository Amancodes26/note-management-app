import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

// Define custom styles using styled API
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(8),
    textAlign: "center",
}));

const StyledForm = styled('form')(({ theme }) => ({
    width: "100%",
    marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const userCredentials = {
            email,
            password,
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentials),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            }
    
            const data = await response.json();
            console.log('Success:', data);
            localStorage.setItem("loggedIn", "true");
            // Store token in localStorage and navigate
            localStorage.setItem('token', data.token);
            console.log('Token stored:', localStorage.getItem('token'));
            navigate('/dashboard'); // Redirect to a protected page
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="bg-[#121212] h-full">
            <Container component="main" maxWidth="xs">
                <StyledPaper elevation={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Log In
                    </Typography>

                    <StyledForm noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <SubmitButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Log In
                        </SubmitButton>
                        <Box mt={2}>
                            <Typography variant="body2">
                                Don't have an account? <Link to="/signup">Sign Up</Link>
                            </Typography>
                        </Box>
                    </StyledForm>
                </StyledPaper>
            </Container>
        </div>
    );
};

export default Login;
