/**
 * @filename Meta.js
 * @description head 태그 내의 seo처리 및 웹폰트 참조를 위한 컴포넌트
 * @author: Hess
 */
import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      {/**SEO태그 */}
      <mete name="description" content={props.description} />
      <mete name="keywords" content={props.keywords} />
      <mete name="author" content={props.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'React 클론코딩',
  description: 'React로 클론코딩',
  keywords: 'React',
  author: 'Hess',
  url: window.location.href,
};
export default Meta;
