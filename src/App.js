// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Candidate from './components/Candidate';
import AutomationPage from './components/AutomationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path='/automation' element={<AutomationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
