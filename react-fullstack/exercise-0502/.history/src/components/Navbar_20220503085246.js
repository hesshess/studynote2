import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarStyles = styled.nav`
  #navbar {
    width: 100%;
    height: 3%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    letter-spacing: 5px;
    box-shadow: 0px 2px 6px grey;
    z-index: 3;
    padding: 30px;
  }
  .navbar__logo {
    padding: 0;
  }
  .navbar__menu {
    width: 26%;
    display: flex;
    justify-content: space-around;
    padding-right: 20px;
  }
`;

const Navbar = () => {
  return (
    <NavbarStyles id="navbar">
      <div className="navbar__logo">
        <NavLink to="/home" className="bar-item">
          <b>BR</b> Architects
        </NavLink>
      </div>

      <div className="navbar__menu">
        <NavLink to="/projects" className="bar-item">
          Projects
        </NavLink>
        <NavLink to="/about" className="bar-item">
          About
        </NavLink>
        <NavLink to="/contact" className="bar-item">
          Contact
        </NavLink>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
