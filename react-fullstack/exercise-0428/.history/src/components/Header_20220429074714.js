import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  .header {
    .jumbotron {
      padding: 80px;
      text-align: center;
      background: #1abc9c;
      color: white;
      h1 {
        font-size: 40px;
      }
    }
  }
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      .atag {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        &.right {
          justify-content: flex-end;
          margin-left: auto;
        }
        &:hover {
          background-color: #ddd;
          color: black;
          &.active {
            background-color: #666;
            color: white;
          }
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
          <Link className="atag" to="#" class="active">
            Home
          </Link>
          <Link className="atag" to="#">
            Link1
          </Link>
          <Link className="atag" to="#">
            Link2
          </Link>
          <Link className="atag right" to="#">
            Link3
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default NewHeader;
