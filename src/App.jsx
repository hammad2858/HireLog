import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";
import { JobProvider } from "./context/JobContext";
import "./App.css";

function App() {
  return (
    <JobProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}

export default App;
