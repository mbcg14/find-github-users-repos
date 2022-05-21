import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './pages/Home/index.js';
import Repositories from './pages/Repositories/index.js';

export default function RouteFile() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repositories' element={<Repositories />} />
      </Routes>
    </Router>
  );
}