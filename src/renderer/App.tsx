import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNavbar from 'components/LeftNavbar';

const Main = () => {
  return (
    <div className="bg-transparent grid grid-cols-4 min-h-screen">
      <LeftNavbar />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
