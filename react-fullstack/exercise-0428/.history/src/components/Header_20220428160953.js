import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  * {
    font-family: 'Noto Sans KR';
  }

  .header .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
  }

  .header .jumbotron h1 {
    font-size: 40px;
  }

  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
  }

  .navbar nav {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar nav a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }

  .navbar a.right {
    margin-left: auto;
  }

  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }

  .navbar a.active {
    background-color: #666;
    color: white;
  }
`;

const NewHeader = () => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="jumbotron">
          <h1>My Website</h1>
          <p>
            A <b>responsive</b> website created by me.
          </p>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <Link to="#" class="active">
            Home
          </Link>
          <Link to="#">Link1</Link>
          <Link to="#">Link2</Link>
          <Link to="#" class="right">
            Link3
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default NewHeader;
