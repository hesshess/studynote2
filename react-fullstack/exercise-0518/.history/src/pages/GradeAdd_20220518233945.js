import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Spinner from '.../img/components/Spinner';

import regexHelper from '.../img/libs/RegexHelper';

//Table 컴포넌트의 CSS를 확장한 컴포넌트
const JoinStyles = styled.div`
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

const GradeAdd = () => {
  /**저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /**백엔드에 데이터 저장을 위한 ajax요청 객체 생성 - 매뉴얼 전송 모드 */
  const [{ loading }, refetch] = useAxios(
    {
      url: 'http://localhost:3001/member',
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
      /*아이디 검사*/
      regexHelper.value(current.user_id, '아이디를 입력하세요.');
      regexHelper.minLength(
        current.user_id,
        4,
        '아이디는 최소 4자 이상 입력 가능합니다.'
      );
      regexHelper.maxLength(
        current.user_id,
        20,
        '아이디는 최대 20자 까지 입력 가능합니다.'
      );
      regexHelper.engNum(
        current.user_id,
        '아이디는 영어와 숫자 조합만 입력 가능합니다.'
      );

      /*비밀번호 검사*/
      regexHelper.value(current.user_pw, '비밀번호를 입력하세요.');
      regexHelper.minLength(
        current.user_pw,
        4,
        '비밀번호는 최소 4자 이상 입력 가능합니다.'
      );
      regexHelper.maxLength(
        current.user_pw,
        20,
        '비밀번호는 최대 20자 까지 입력 가능합니다.'
      );
      regexHelper.compareTo(
        current.user_pw,
        current.user_pw_re,
        '비밀번호 확인이 잘못되었습니다'
      );

      /*이름 검사*/
      regexHelper.value(current.user_name, '이름을 입력하세요.');
      regexHelper.kor(current.user_name, '이름은 한글로 입력하세요.');
      regexHelper.minLength(
        current.user_name,
        2,
        '이름은 최소 2글자 이상입력해야 합니다.'
      );
      regexHelper.maxLength(
        current.user_name,
        10,
        '이름은 최대 10글자 까지 입력가능.'
      );

      /*생년월일*/
      regexHelper.value(current.user_birth_y, '년도를 입력하세요');
      regexHelper.year(current.user_birth_y, '정확한 년도를 입력하세요');

      regexHelper.select(current.month, '정확한 달을 선택하세요');

      regexHelper.value(current.user_birth_d, '날짜를 입력하세요');
      regexHelper.date(current.user_birth_d, '정확한 날짜를 입력하세요');

      /*성별검사*/
      regexHelper.select(current.gender, '성별을 선택하세요');

      /*이메일 검사*/
      regexHelper.value(current.email, '이메일을 입력하세요');
      regexHelper.email(current.email, '이메일 주소가 잘못되었습니다');

      /*연락처 검사*/
      regexHelper.select(current.phone_country, '국가번호를 선택하세요');
      regexHelper.value(current.tel, '연락처를 입력하세요');
      regexHelper.cellphone(current.tel, '연락처가 잘못되었습니다');

      regexHelper.compareTo(
        current.tel,
        current.verify,
        '잘못된 인증번호입니다.'
      );
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }
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
  };

  return (
    <>
      <Spinner visible={loading} />
      <JoinStyles className="frame">
        <div className="logo_b">
          <img src=".../img/img/naver.png" alt="" />
        </div>
        <form onSubmit={onSubmit} name="join-form">
          <div className="form-group">
            <label htmlFor="user_id">아이디</label>
            <input
              type="text"
              name="user_id"
              id="user_id"
              className="form-control user_id"
              placeholder="@naver.com   "
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
              />
              <select name="month" className="month">
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
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender">성별</label>
            <select name="gender" id="gender">
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">휴대전화</label>
            <div className="phone-box">
              <select name="phone_country" id="phone_country">
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
          <button type="sumit">가입하기</button>
        </form>
        <div className="term">
          <span>이용약관</span>
          <span>|</span>
          <span>
            <b>개인정보처리방침</b>
          </span>
          <span>|</span>
          <span>책임의 한계와 법적고지</span>
          <span>|</span>
          <span>회원정보 고객센터</span>
        </div>
        <div className="copyr">
          <div className="logo_s">
            <img src="../img/naver.png" alt="" />
          </div>
          <span>
            Copyright<b> NAVER Corp. </b>All Rights Reserved.
          </span>
        </div>
      </JoinStyles>
    </>
  );
};

export default GradeAdd;
