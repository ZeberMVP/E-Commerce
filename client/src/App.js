import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Route path='/' element={<Main />} />
    </Router>
  );
}

export default App;
