import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
// TODO Refactor to lyics
import Song from './pages/Song';
import Translation from './pages/Translation';
import RootLayout from './layouts/RootLayout'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="song" element={<Song />} />
          <Route path="translation" element={<Translation />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;