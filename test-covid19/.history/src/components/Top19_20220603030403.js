import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';
import styled from 'styled-components';

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
  const navigate = useNavigate();
  const gte = e.target.date1.value;
  const lte = e.target.date2.value;
  /**
  const qs = useQueryString();
  console.log(qs);
  const query = qs.query;
  /*/
  const { targetDt_gte, targetDt_lte } = useQueryString();
  /**/

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`/confirmed?targetDt_gte=${gte}&targetDt_lte=${lte}`);
    },
    [navigate]
  );

  return (
    <div>
      <h1>카카오 검색</h1>
      <Form onSubmit={onSearchSubmit}>
        <input type="date" name="date1" defaultValue={targetDt_gte} />
        <input type="date" name="date2" defaultValue={targetDt_lte} />
        <button type="submit">검색</button>
      </Form>

      {targetDt_gte && targetDt_lte && (
        <nav>
          <MenuLink to={`/confirmed?targetDt_gte=${gte}&targetDt_lte=${lte}`}>
            일일확진자
          </MenuLink>
          <MenuLink
            to={`/confirmed_acc?targetDt_gte=${gte}&targetDt_lte=${lte}`}
          >
            누적확진자
          </MenuLink>
          <MenuLink to={`/active?targetDt_gte=${gte}&targetDt_lte=${lte}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`/released?targetDt_gte=${gte}&targetDt_lte=${lte}`}>
            격리해제
          </MenuLink>
          <MenuLink
            to={`/released_acc?targetDt_gte=${gte}&targetDt_lte=${lte}`}
          >
            누적격리해제
          </MenuLink>
          <MenuLink to={`/death?targetDt_gte=${gte}&targetDt_lte=${lte}`}>
            사망자
          </MenuLink>
          <MenuLink to={`/death_acc?targetDt_gte=${gte}&targetDt_lte=${lte}`}>
            누적사망자
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
