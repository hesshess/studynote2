import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
