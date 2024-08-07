import "./App.css";
import Navbar from "./components/ui/Navbar";
import Dashboard from "./components/ui/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <div className="App text-center text-3xl h-svh">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </Router>
    );
}

export default App;
