import React from 'react';
import styled from 'styled-components';

const StyledSide = styled.side`
  * {
    font-family: 'Noto Sans KR';
  }
  .side {
    width: 360px;
    flex: none;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;

    .container {
      padding: 20px;
    }
    .fakeimg {
      background-color: #aaa;
      width: auto;
      padding: 20px;
    }
  }
`;

const NewSide = () => {
  return (
    <StyledSide>
      <div className="side">
        <div className="container">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg" style={{ height: '200px' }}>
            Image
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={{ height: '60px' }}>
            Image
          </div>
          <br />
          <div className="fakeimg" style={{ height: '60px' }}>
            Image
          </div>
          <br />
          <div className="fakeimg" style={{ height: '60px' }}>
            Image
          </div>
        </div>
      </div>
    </StyledSide>
  );
};

export default NewSide;
