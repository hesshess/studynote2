import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  text-align: center;
  background: #ddd;
`;

const NewFooter = () => {
  return (
    <StyledFooter className="footer">
      <h2>Footer</h2>
    </StyledFooter>
  );
};

export default NewFooter;
