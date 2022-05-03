import React from 'react';
import styled from 'styled-components';

const TeamStyles = styled.div`
  .team-mem {
    display: flex;
    height: 60vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Team = ({ img, name, position, desc }) => {
  return (
    <TeamStyles className="team-mem">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{desc}</p>
      <p>
        <button>Contact</button>
      </p>
    </TeamStyles>
  );
};

export default Team;
