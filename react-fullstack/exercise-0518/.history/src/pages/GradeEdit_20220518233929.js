import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

//Table 컴포넌트의 CSS를 확장한 컴포넌트
const FormStyles = styled.div`
  margin: 25px auto;
  width: 460px;
  .logo_b {
    width: 250px;
    height: 50px;
    margin: 30px auto;
  }
  .logo_s {
    width: 60px;
    height: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: left;
    > input {
      width: 460px;
    }
  }

  input {
    height: 50px;
    border: 1px solid lightgray;
    text-indent: 10px;
    font-size: 15px;
    &:focus {
      outline: none;
      background-size: 0;
      border: 1px solid #02d05d;
    }
  }

  .gray {
    color: gray;
  }
  label {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 14px;
  }
  .user_id::placeholder {
    text-align: right;
    color: gray;
  }
  .user_pw {
    background-image: url('../img/lock1.png');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2rem;
  }
  .user_pw_re {
    background-image: url('../img/lock2.png');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2rem;
  }
  select {
    width: 100%;
    border: 1px solid lightgray;
    height: 50px;
    text-indent: 10px;
    appearance: none;
    background-image: url('../img/arrow.png');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2rem;
    &:focus {
      outline: none;
      background-size: 0;
      border: 1px solid #02d05d;
    }
  }

  .month {
    width: 135px;
  }
  .birth {
    width: 460px;
    display: flex;
    justify-content: space-between;
  }
  .tel {
    width: 460px;
    display: flex;
    justify-content: space-between;

    > input {
      width: 65%;
    }
  }

  .verify_btn {
    width: 150px;
    text-indent: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #02d05d;
    color: white;
  }
  .verify_num {
    width: 460px;
    height: 50px;
    border: 1px solid lightgray;
    background-color: #f5f6f7;
    color: gray;
    text-indent: 10px;
    display: flex;
    align-items: center;
  }
  .phone-box {
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  button {
    border-style: none;
    width: 460px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #02d05d;
    color: white;
    margin: 40px 0;
    font-size: 20px;
  }
  .term {
    font-size: 14px;
    font-weight: 100;
    text-align: center;
  }
  .copyr {
    display: flex;
    justify-content: space-evenly;
    font-weight: 100;
    margin: 10px 0;
  }
`;

const GradeEdit = () => {
  //Path 파라미터로 전달된 일련번호
  const { id } = useParams();

  /**데이터수정후 목록페이지로 강제 이동하기 위한 함수 생성 */
  const navigate = useNavigate();

  /**백엔드에 데이터 저장을 위한 ajax요청 객체 생성 - 매뉴얼 전송 모드 */
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3001/member/${id}`
  );

  /**form의 submit버튼이 눌러졌을때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    //이벤트가 발생한 폼객체
    const current = e.target;

    //입력받은 값 취득하기
    const userid = current.user_id.value;
    const pw = current.user_pw.value;
    const name = current.name.value;
    const year = current.user_birth_y.value;
    const month = current.month.value;
    const date = current.user_birth_d.value;
    const sex = current.gender.value;
    const email = current.email.value;
    const country = current.phone_country.value;
    const tel = current.tel.value;

    /***
     * 입력값에 대한 유효성 검사 (생략)
     */

    let json = null;

    //입력, 수정, 삭제 처리는 async-await문법을 사용해야한다
    (async () => {
      try {
        const response = await refetch({
          method: 'PUT',
          data: {
            userid: userid,
            pw: pw,
            name: name,
            year: parseInt(year),
            month: parseInt(month),
            date: parseInt(date),
            sex: sex,
            email: email,
            country: country,
            tel: parseInt(tel),
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
  }, []);

  return (
    <>
      <Spinner visible={loading} />
      <FormStyles className="frame">
        {error ? (
          <div>
            <h1>Oops~!!! {error.code} Error.</h1>
            <hr />
            <p>{error.message}</p>
          </div>
        ) : (
          //Ajax를 통해 조회한 결과가 존재할 때만 데이터 표시함
          data && (
            <form onSubmit={onSubmit} name="join-form">
              <div className="form-group">
                <label htmlFor="user_id">아이디</label>
                <input
                  type="text"
                  name="user_id"
                  id="user_id"
                  className="form-control user_id"
                  placeholder="@naver.com   "
                  defaultValue={data.user_id}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_pw">비밀번호</label>
                <input
                  type="password"
                  name="user_pw"
                  id="user_pw"
                  className="form-control user_pw"
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_pw_re">비밀번호 확인</label>
                <input
                  type="password"
                  name="user_pw_re"
                  id="user_pw_re"
                  className="form-control user_pw_re"
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_name">이름</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="form-control"
                  defaultValue={data.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_birth">생년월일</label>
                <div className="birth">
                  <input
                    type="text"
                    name="user_birth_y"
                    id="user_birth_y"
                    placeholder="년(4자)"
                    defaultValue={data.year}
                  />
                  <select
                    name="month"
                    className="month"
                    defaultValue={data.month}
                  >
                    <option value="">월</option>
                    <option value="1">1월</option>
                    <option value="2">2월</option>
                    <option value="3">3월</option>
                    <option value="4">4월</option>
                    <option value="5">5월</option>
                    <option value="6">6월</option>
                    <option value="7">7월</option>
                    <option value="8">8월</option>
                    <option value="9">9월</option>
                    <option value="10">10월</option>
                    <option value="11">11월</option>
                    <option value="12">12월</option>
                  </select>
                  <input
                    type="text"
                    name="user_birth_d"
                    id="user_birth_d"
                    placeholder="일"
                    defaultValue={data.date}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gender">성별</label>
                <select name="gender" id="gender" defaultValue={data.sex}>
                  <option value="">성별</option>
                  <option id="gender1" value="F">
                    여
                  </option>
                  <option id="gender2" value="M">
                    남
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  본인 확인 이메일 <span className="gray">(선택)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="선택입력"
                  defaultValue={data.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">휴대전화</label>
                <div className="phone-box">
                  <select
                    name="phone_country"
                    id="phone_country"
                    defaultValue={data.country}
                  >
                    <option value="">대한민국 +82</option>
                    <option value="kor">대한민국 +82</option>
                    <option value="uk">영국 +44</option>
                    <option value="aus">호주 +61</option>
                  </select>
                  <div className="tel">
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="전화번호 입력"
                      defaultValue={data.tel}
                    />
                    <div className="verify_btn">인증번호 받기</div>
                  </div>
                  <input
                    id="verify"
                    name="verify"
                    className="verify_num"
                    placeholder="전화번호를 재입력 하세요"
                  ></input>
                </div>
              </div>
              <button type="sumit">수정하기</button>
            </form>
          )
        )}
      </FormStyles>
    </>
  );
};

export default GradeEdit;
