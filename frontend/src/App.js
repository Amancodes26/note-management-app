import "./App.css";
import Navbar from "./components/ui/Navbar";
import Dashboard from "./components/ui/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App text-center text-3xl h-svh">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
