import React from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic
    };

    return (
        <Container component="main" maxWidth="xs">
            <StyledPaper elevation={3}>
                <Typography variant="h5" gutterBottom>
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
    );
};

export default Login;