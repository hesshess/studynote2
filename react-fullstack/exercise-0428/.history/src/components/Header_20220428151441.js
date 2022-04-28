import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;

    h1 {
      font-size: 40px;
    }
  }
`;

const NewHeader = () => {
  return (
    <StyledHeader className="header">
      <div className="jumbotron">
        <h1>My Website</h1>
        <p>
          A <b>responsive</b> website created by me.
        </p>
      </div>
    </StyledHeader>
  );
};

export default NewHeader;
