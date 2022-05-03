/**
 * @filename: Meta.js
 * @description: head 태그 내 SEO처리 밒 기본 참조 리소스 명시
 * @author: hesshess @github
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="description" content="{props.description}" />
        <meta name="keywords" content={props.keywords} />
        <meta name="authors" content={props.authors} />
        <meta property="og:ytpe" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />

        {/**추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
        <style type="text/css">
          {`
          * {
            margin: 0;
            box-sizing: border-box;
          }
          
          body {
            width: 100%;
            height: 100%;
            font-family: Verdana, sans-serif;
          }
          
          h1 {
            font-size: 40px;
          }
          h2 {
            font-size: 30px;
          }
          h3 {
            font-size: 25px;
            font-weight: 100;
          }
          h4 {
            font-size: 20px;
          }
          h5 {
            font-size: 15px;
          }
          h6 {
            font-size: 10px;
          }
          img {
            max-width: 100%;
          }
          a {
            padding: 10px;
            text-decoration: none;
            color: black;
          }
          a:hover {
            background-color: lightgray;
            border-radius: 1px;
          }
          `}
        </style>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: 'BA-Architects',
  description: 'React.js 예제 입니다.',
  keywords: 'React',
  authors: '쌤',

  url: window.location.href,
};

export default Meta;
