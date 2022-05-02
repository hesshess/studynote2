import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import sample from '../assets/img/sample.png';

const Meta = (props) => {
  return (
      <HelmetProvider>
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      {/**SEO 태그 */}
      <meta name="description" content="{props.description}" />
      <meta name="keywords" content={props.keywords} />
      <meta name="authors" content={props.authors} />
      <meta property="og:ytpe" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {/*<meta property="og:image" content={props.image} />*/}
      <meta property="og:url" content={props.url} />

      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet">

      {/**추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
      <style type="text/css">{`
            *{
                font-family: 'Noto Sans', sans-serif;
            }
            body{
                margin:0;
                padding:30px;
            }
          `}
      </style>
    </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: 'React Example',
  description: 'React.js 예제 입니다.',
  keywords: 'React',
  authors: '쌤',
  //</link>image: sample,
  url: window.location.href,
};

export default Meta;
