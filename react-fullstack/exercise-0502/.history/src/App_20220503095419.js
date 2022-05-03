import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './pages/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Content />
      <Footer />
    </>
  );
}

export default App;
