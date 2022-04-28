import React from 'react';
import styled from 'styled-components';
import NewSide from '../components/Side';
import NewMain from '../components/Main';

const StyledContent = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const NewContent = () => {
  return (
    <StyledContent className="content">
      <NewSide />
      <NewMain />
    </StyledContent>
  );
};

export default NewContent;
