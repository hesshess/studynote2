import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';
import { useParams } from 'react-router-dom';
import MenuLink from './MenuLink';

const Top19 = memo(() => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.covid);
  const { api } = useParams();
  React.useEffect(() => {
    dispatch(getCovid({ api }));
  }, [dispatch, api]);

  const [dateId1, setDateId1] = useState(0);
  const [dateId2, setDateId2] = useState(0);
  const [disable, setDisable] = useState(true);

  const onSelect1 = (e) => {
    setDateId1(parseInt(e.target.value));
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDateId2(parseInt(e.target.value));
  };

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dateId1 > dateId2 &&
          alert('날짜를 조정하시오');
        }
        navigate(`?confirmed_gte=${dateId1}&confirmed_lte=${dateId2}`);
    },
    [navigate, dateId1, dateId2]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Covid 현황</h1>
        <select onChange={onSelect1} value={dateId1}>
          {data &&
            data.map(({ id, date }) => (
              <option key={id} value={id}>
                {date.slice(0, 10)}
              </option>
            ))}
        </select>
        ~
        <select onChange={onSelect2} value={dateId2} disabled={disable}>
          {data &&
            data.map(({ id, date }) => (
              <option key={id} value={id}>
                {date.slice(0, 10)}
              </option>
            ))}
        </select>
        <button>검색</button>
      </form>

      <hr />
      <></>
      {
        <nav>
          <MenuLink to={`?confirmed_gte=${dateId1}&confirmed_lte=${dateId2}`}>
            일일확진자
          </MenuLink>
          <MenuLink
            to={`?confirmed_acc_gte=${dateId1}&confirmed_acc_lte=${dateId2}`}
          >
            누적확진자
          </MenuLink>
          <MenuLink to={`?active_gte=${dateId1}&active_lte=${dateId2}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`?released_gte=${dateId1}&released_lte=${dateId2}`}>
            격리해제
          </MenuLink>
          <MenuLink
            to={`?released_acc_gte=${dateId1}&released_acc_lte=${dateId2}`}
          >
            누적격리해제
          </MenuLink>
          <MenuLink to={`?death_gte=${dateId1}&death_lte=${dateId2}`}>
            사망자
          </MenuLink>
          <MenuLink to={`?death_acc_gte=${dateId1}&death_acc_lte=${dateId2}`}>
            누적사망자
          </MenuLink>
        </nav>
      }
    </div>
  );
});

export default Top19;
