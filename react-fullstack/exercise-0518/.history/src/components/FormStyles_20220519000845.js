import styled from 'styled-components';

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
    background-image: url('/img/lock1.png');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 2rem;
  }
  .user_pw_re {
    background-image: url('/img/lock2.png');
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
    background-image: url('/img/arrow.png');
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

export default FormStyles;
