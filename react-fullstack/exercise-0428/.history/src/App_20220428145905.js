import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
    <Helmet>
      <meta charset="utf-8" />
      <title>My Site</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"rel="stylesheet">
      </Helmet>
      
    <header className="header"></header>
    <nav className="navbar"></nav>
    <section className="content">
      <div className="side"></div>
      <div className="main"></div>
    </section>
    <footer className="footer"></footer>
    </div>
};

export default App;
