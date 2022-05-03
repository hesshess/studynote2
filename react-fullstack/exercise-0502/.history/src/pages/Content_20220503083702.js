import React from 'react';
import data from '../data';

import About from 'About';
import Contact from 'Contact';
import Map from 'Map';
import Projects from 'Projects';

const Content = () => {
  const { project, about } = data;
  return (
    <>
      <Projects data={project} />
      <About data={about} />
      <Contact />
      <Map />
    </>
  );
};

export default Content;
