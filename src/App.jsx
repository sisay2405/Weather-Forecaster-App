// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from 'react-router-dom';

import Layout from './Pages/Layout';

import NotFound from './Pages/NotFound';
import Home from './Components/Home';
import EachDay from './Components/EachDay';

// const colorPic2 = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const bodyBackgroundColor = '#';
// function randomNumb2() {
//   return Math.floor(Math.random() * colorPic2.length);
// }
// for (let i = 0; i < 6; i++) {
//  const bodyBackgroundColor += colorPic2[randomNumb2()];
// }
// bodyBackground.style.backgroundColor = bodyBackgroundColor;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="EachDay" element={<EachDay />} /> */}
        <Route path="EachDay/:id" element={<EachDay />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
