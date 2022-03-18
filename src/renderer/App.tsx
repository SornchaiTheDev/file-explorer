import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as fs from 'fs';
import * as path from 'path';

const Hello = () => {
  useEffect(() => {
    fs.readdir('/Users/imdev', (err: any, data: string[]) => {
      if (err) throw err;
      data.map((file) => {
        const type = fs.statSync(path.join('/Users/imdev', file)).isDirectory();
        if (type && file[0] !== '.') {
          console.log(file);
        }
      });
    });
  }, []);
  return (
    <div className="w-full h-screen">
      <h1>hello world</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
