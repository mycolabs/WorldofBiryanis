import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<ApplicationForm />} />
    </Routes>
  );
}

export default App;