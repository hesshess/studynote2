import React from 'react';
import { Helmet } from 'react-helmet';
import NewHeader from './components/Header';

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>
        body {
    margin: 0;
    padding: 0;
}
        </style>
      </Helmet>

      <NewHeader />
      <nav className="navbar"></nav>
      <section className="content">
        <div className="side"></div>
        <div className="main"></div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
