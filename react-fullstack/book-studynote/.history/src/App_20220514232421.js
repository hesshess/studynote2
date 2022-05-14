import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';

import Home from './pages/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

    </Routes>
  );
};

export default App;
