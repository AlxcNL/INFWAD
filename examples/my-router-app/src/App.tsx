import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Song from './pages/Song';
import RootLayout from './layouts/RootLayout'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="song" element={<Song />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;