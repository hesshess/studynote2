import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from './slices/Covid19Slice';
import Spinner from './components/Spinner';
import ErrorView from './components/ErrorView';

import MenuLink from './MenuLink';

const Form = styled.form`
  position: sticky;
  display: flex;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;

  input,
  button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }

  input {
    flex: 1;
  }
  button {
    width: 70px;
    flex: none;
  }
`;

const Top = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const [dateId1, setDateId1] = useState(0);
  const [dateId2, setDateId2] = useState(0);
  const [disable, setDisable] = useState(false);

  const onSelect1 = (e) => {
    setDateId1(e.target.value);
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDateId2(e.target.value);
  };

  const navigate = useNavigate();

  const { queryString } = useQueryString();
  /**/

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`?confirmed_gte=${dateId1}&confirmed_lte=${dateId2 + 1}`);
    },
    [navigate]
  );

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <form onSubmit={onSubmit}>
            <h1>Covid 현황</h1>
            <select onChange={onSelect1} value={dateId1}>
              {data.map(({ id, date }) => (
                <option key={id} value={id}>
                  {date.slice(0, 10)}
                </option>
              ))}
            </select>
            <select onChange={onSelect2} value={dateId2} disabled={disable}>
              {data.map(({ id, date }) => (
                <option key={id} value={id}>
                  {date.slice(0, 10)}
                </option>
              ))}
            </select>
            <button>검색</button>
          </form>
        )
      )}

      {queryString && (
        <nav>
          <MenuLink to={`/web?queryString=${encodeURIComponent(queryString)}`}>
            웹
          </MenuLink>
          <MenuLink
            to={`/image?queryString=${encodeURIComponent(queryString)}`}
          >
            이미지
          </MenuLink>
          <MenuLink to={`/blog?queryString=${encodeURIComponent(queryString)}`}>
            블로그
          </MenuLink>
          <MenuLink to={`/cafe?queryString=${encodeURIComponent(queryString)}`}>
            카페
          </MenuLink>
          <MenuLink to={`/book?queryString=${encodeURIComponent(queryString)}`}>
            책
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
