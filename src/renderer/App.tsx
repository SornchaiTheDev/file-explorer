import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNavbar from 'components/LeftNavbar';
import Content from 'components/Content';
import Context from '../Context/Context';

const Main = () => {
  return (
    <div className="bg-transparent grid grid-cols-4 min-h-screen">
      <LeftNavbar />
      <Content />
    </div>
  );
};

export default function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Context>
  );
}
