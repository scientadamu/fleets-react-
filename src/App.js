import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import AddFleet from "./components/AddFleet"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-fleet" element={<AddFleet />} /> {/* Ensure this route exists */}
      </Routes>
    </Router>
  );
}

export default App;
