import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>

      <meta property="og:title" content={props.title} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'React Example',
};

export default Meta;
