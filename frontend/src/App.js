import './App.css';
import Navbar from './components/ui/Navbar';
import Dashboard from './components/ui/Dashboard';
import Login from './components/ui/Login';

function App() {
  return (
    <div className="App text-center text-3xl h-svh">
        <Navbar />
        <Dashboard />
    </div>
  );
}

export default App;
