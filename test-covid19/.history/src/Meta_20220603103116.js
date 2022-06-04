import React, { memo } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//이 경로에 적절한 이미지를 직접 배치햐야한다
import sample from './assets/img/reactjs.png';

const Meta = memo((props) => {
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
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />
        <link rel="shortcut icon" href={props.image} type="image/png" />
        <link rel="icon" href={props.image} type="image/png" />
        <style type="text/css">{`
            *{
                font-family: 'Noto Sans', sans-serif;
            }
            body{
                margin:0;
                padding:30px;
            }
          `}</style>
      </Helmet>
    </HelmetProvider>
  );
});

Meta.defaultProps = {
  title: 'React 시험 ',
  description: '5월 30일 리액트 시험',
  keywords: 'React, Redux, Covid19, Test',
  authors: 'Hess',
  image: sample,
  url: window.location.href,
};

export default Meta;
