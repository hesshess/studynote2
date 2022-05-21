import React from 'react';
import useAxios from 'axios-hooks';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import regexHelper from '../libs/RegexHelper';
import FormStyles from '../components/FormStyles';

const MemEdit = () => {
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
                    <option value="">---국가번호 선택---</option>
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

export default React.memo(MemEdit);
