import React from 'react';
import data from '../data';

import About from '../components/contents/About';
import Contact from '../components/contents/Contact';
import Map from '../components/contents/Map';
import Projects from '../components/contents/Projects';

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
