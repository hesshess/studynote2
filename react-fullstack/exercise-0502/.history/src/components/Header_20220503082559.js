import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  header {
    position: relative;
    display: block;
  }
  header > img {
    width: 100%;
    height: 90vh;
  }
  header span {
    padding: 10px 20px;
  }
  header span.br {
    padding: 10px 20px;
    background: black;
  }

  header h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderStyles id="home">
      <img src="../img/architect.jpg" alt="Architect" />
      <h1>
        <span class="br">BR</span>
        <span class="arc">Architects</span>
      </h1>
    </HeaderStyles>
  );
};

export default Header;
