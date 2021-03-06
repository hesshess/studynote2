import React, { memo } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//이 경로에 적절한 이미지를 직접 배치햐야한다
import sample from './assets/img/sample.png';

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
      </Helmet>
    </HelmetProvider>
  );
});

Meta.defaultProps = {
  title: 'React OpenAPI 연동',
  description: 'React.js로 만든 Rdux활용 카카오 컴색 OpenAPI 연동 예제 입니다.',
  keywords: 'React, Redux, Kakao, OpenAPI',
  authors: '호쌤',
  image: sample,
  url: window.location.href,
};

export default Meta;
