import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Shell from './components/layout/Shell.jsx';
import Home from './pages/Home.jsx';
import Navigation from './pages/Navigation.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import FacultyDashboard from './pages/FacultyDashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Events from './pages/Events.jsx';

export default function App() {
  const location = useLocation();

  return (
    <Shell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/faculty" element={<FacultyDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AnimatePresence>
    </Shell>
  );
}
