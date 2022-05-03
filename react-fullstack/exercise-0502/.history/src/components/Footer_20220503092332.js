import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
   {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>Powered by CSS</p>
    </FooterStyles>
  );
};

export default Footer;
