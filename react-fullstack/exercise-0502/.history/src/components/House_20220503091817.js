import React from 'react';
import styled from 'styled-components';

const HouseStyles = styled.div`
  div.houses {
    position: relative;
  }
  div.house__name {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 15px;
    color: white;
    background-color: black;
    height: fit-content;
  }
`;

const House = ({ src, name }) => {
  return (
    <HouseStyles>
      <img src={src} alt="house" />
      <div className="house_name">{name}</div>
    </HouseStyles>
  );
};

export default House;
