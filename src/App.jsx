import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EwsNavbar from "./components/EwsNavbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import Interventions from "./pages/Interventions";
import Experiment4Navbar from "./components/Experiment4Navbar";

function App() {
  return (
    <BrowserRouter>
      <EwsNavbar />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/risk-report" element={<div className="container my-4"><h3>Risk Report</h3><p className="text-muted">Report generation coming in full app.</p></div>} />
        <Route path="/interventions" element={<Interventions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
