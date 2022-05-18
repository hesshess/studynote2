import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

import regexHelper from '../libs/RegexHelper';

//Table 컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }

    label {
      margin-left: 7px;
      margin-right: 10px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

const GradeAdd = () => {
  /**저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /**백엔드에 데이터 저장을 위한 ajax요청 객체 생성 - 매뉴얼 전송 모드 */
  const [{ loading }, refetch] = useAxios(
    {
      url: 'http://localhost:3001/grade',
      method: 'POST',
    },
    { manual: true }
  );

  /**form의 submit버튼이 눌러졌을때 호출될 이벤트 핸들러 */
  const onSubmit = (e) => {
    e.preventDefault();

    //이벤트가 발생한 폼객체
    const current = e.target;

    try {
      regexHelper.value(current.name, '이름을 입력하세요.');
      regexHelper.kor(current.name, '이름은 한글로 입력하세요.');
      regexHelper.minLength(
        current.name,
        2,
        '이름은 최소 2글자 이상입력해야 합니다.'
      );
      regexHelper.maxLength(
        current.name,
        10,
        '이름은 최대 10글자 까지 입력가능.'
      );
      regexHelper.value(current.level, '학년을 선택하세요.');
      regexHelper.check(current.sex, '성별을 선택하세요.');
      regexHelper.value(current.kor, '국어 점수를 입력하세요.');
      regexHelper.num(current.kor, '.국어 점수는 숫자만 입력 가능');
      regexHelper.value(current.eng, '영어 점수를 입력하세요.');
      regexHelper.num(current.eng, '.영어 점수는 숫자만 입력 가능');
      regexHelper.value(current.math, '수학 점수를 입력하세요.');
      regexHelper.num(current.math, '.수학 점수는 숫자만 입력 가능');
      regexHelper.value(current.sin, '과학 점수를 입력하세요.');
      regexHelper.num(current.sin, '.과학 점수는 숫자만 입력 가능');
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }
    //입력받은 값 취득하기
    const name = current.name.value;
    const level = current.level.value;
    const sex = current.sex.value;
    const kor = current.kor.value;
    const eng = current.eng.value;
    const math = current.math.value;
    const sin = current.sin.value;

    /***
     * 입력값에 대한 유효성 검사 (생략)
     */

    let json = null;

    //입력, 수정, 삭제 처리는 async-await문법을 사용해야한다
    (async () => {
      try {
        const response = await refetch({
          data: {
            name: name,
            level: parseInt(level),
            sex: sex,
            kor: parseInt(kor),
            eng: parseInt(eng),
            math: parseInt(math),
            sin: parseInt(sin),
          },
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status}] ${e.response.statusText}\n${e.message}`
        );
      }

      //정상적으로 저장되어 응답을 받았다면?
      if (json !== null) {
        window.alert('저장되었습니다.');
        //페이지 강제 이동(window.location.href = URL 기능과 동일함)
        navigate('/');
      }
    })();
  };

  return (
    <>
      <Spinner visible={loading} />

      <form onSubmit={onSubmit}>
        <TableEx>
          <colgroup>
            <col width="120" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>학년</th>
              <td className="inputWrapper">
                <select name="level" className="field">
                  <option value="">---선택하세요---</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td className="inputWrapper">
                <label>
                  <input type="radio" name="sex" value="남자" />
                  남자
                </label>
                <label>
                  <input type="radio" name="sex" value="여자" />
                  여자
                </label>
              </td>
            </tr>
            <tr>
              <th>국어</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="kor"
                  placeholder="숫자만 입력(0~100)"
                />
              </td>
            </tr>
            <tr>
              <th>영어</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="eng"
                  placeholder="숫자만 입력(0~100)"
                />
              </td>
            </tr>
            <tr>
              <th>수학</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="math"
                  placeholder="숫자만 입력(0~100)"
                />
              </td>
            </tr>
            <tr>
              <th>과학</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="sin"
                  min="0"
                  max="100"
                  step="1"
                  placeholder="숫자만 입력(0~100)"
                />
              </td>
            </tr>
          </tbody>
        </TableEx>

        <div style={{ textAlign: 'center' }}>
          <button type="submit">저장하기</button>
        </div>
      </form>
    </>
  );
};

export default GradeAdd;
