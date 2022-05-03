import React from 'react';
import styled from 'styled-components';
import House from '../House';

const ProjectsStyles = styled.section`
  .title-box {
    display: flex;
    align-items: center;
    width: 100vw;
    height: fit-content;
  }
  .title-box h3 {
    margin: auto;
    width: 90%;
    padding: 20px 0;
    border-bottom: 2px solid lightgray;
  }
  .list-box {
    margin: 30px auto;
    width: 90%;
    display: grid;
    gap: 25px;
    grid-template:
      'box box box box' 1fr
      'box box box box' 1fr / 1fr 1fr 1fr 1fr;
    height: fit-content;
  }
`;

const Projects = ({ data }) => {
  return (
    <ProjectsStyles id="projects">
      <div className="title-box">
        <h3>Projects</h3>
      </div>
      <div className="list-box">
        {data.map(({ subject, img }, index) => (
          <House className="houses" src={img} name={subject} key={index} />
        ))}
      </div>
    </ProjectsStyles>
  );
};

export default Projects;
