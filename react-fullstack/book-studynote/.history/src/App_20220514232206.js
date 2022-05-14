import { Route, Routes } from 'react-router-dom';

import About from './pages/About';

import Home from './pages/Home';


const App = () => {
  return (
    <Routes>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

  );
};

export default App;
