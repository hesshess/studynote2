import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getKakaoSearch } from './slices/KakaoSlice';

const Text = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.kakao);

  React.useEffect(() => {
    dispatch(
      getKakaoSearch({
        api: 'cafe',
        query: '리액트',
        page: 1,
        size: 5,
      })
    );
  }, [dispatch]);

  return loading
    ? 'loading...'
    : error
    ? JSON.stringify(error)
    : JSON.stringify(data);
});

export default Test;
