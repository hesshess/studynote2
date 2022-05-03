import React from 'react';
import styled from 'styled-components';
import Team from '../Team';

const AboutStyles = styled.section`
  .team-box {
    margin: auto;
    width: 90%;
    display: grid;
    gap: 25px;
    grid-template: 'box box box box' 1fr / 1fr 1fr 1fr 1fr;
  }
  .title-box {
    display: block;
    margin: auto;

    p {
      margin: auto;
      padding: 20px 0;
      width: 90%;
    }
  }
`;

const About = ({ data }) => {
  return (
    <AboutStyles id="about">
      <div className="title-box">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="team-box">
        {data.member.map((info, index) => (
          <Team
            img={info.img}
            name={info.name}
            position={info.position}
            desc={info.desc}
            key={index}
          />
        ))}
      </div>
    </AboutStyles>
  );
};

export default About;
