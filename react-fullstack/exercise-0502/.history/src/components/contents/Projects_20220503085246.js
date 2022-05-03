import React from 'react';
import styled from 'styled-components';
import House from '../House';

const ProjectsStyles = styled.section`
  div.title-box {
    display: flex;
    align-items: center;
    width: 100vw;
    height: fit-content;
  }
  div.title-box h3 {
    margin: auto;
    width: 90%;
    padding: 20px 0;
    border-bottom: 2px solid lightgray;
  }
  div.list-box {
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

const Projects = ({}) => {
  return (
    <ProjectsStyles id="projects">
      <div class="title-box">
        <h3>Projects</h3>
      </div>
      <div class="list-box">{}</div>
    </ProjectsStyles>
  );
};

export default Projects;
