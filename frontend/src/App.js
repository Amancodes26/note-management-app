import "./App.css";
import Navbar from "./components/ui/Navbar";
import Dashboard from "./components/ui/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/ui/Home";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const loggedIn = localStorage.getItem("loggedIn");
    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <div className="App text-center text-3xl h-svh">
                    { loggedIn==='true' && <Navbar />}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </Router>
    );
}

export default App;
