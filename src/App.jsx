import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';
import Home from './Components/Home';
import EachDay from './Components/EachDay';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="EachDay/:id" element={<EachDay />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
