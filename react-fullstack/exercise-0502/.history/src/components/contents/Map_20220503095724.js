import React from 'react';
import styled from 'styled-components';

const MapStyles = styled.section`
  img {
    margin: auto;
    width: 90%;
    padding: 20px 0;
  }
`;

const Map = () => {
  return (
    <MapStyles>
      <img src="../img/map.jpg" alt="map" />
    </MapStyles>
  );
};

export default Map;
