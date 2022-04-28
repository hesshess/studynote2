import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  .header .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
    h1 {
      font-size: 40px;
    }
  }

  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
    a.right {
      justify-content: flex-end;
      margin-left: auto;
    }
    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        &.active {
          background-color: #666;
          color: white;
        }
        &:hover {
          background-color: #ddd;
          color: black;
        }
      }
    }
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
          <NavLink to="#" class="active">
            Home
          </NavLink>
          <NavLink to="#">Link1</NavLink>
          <NavLink to="#">Link2</NavLink>
          <NavLink to="#" class="right">
            Link3
          </NavLink>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default NewHeader;
