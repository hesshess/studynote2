import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.section`
  .title-box {
    display: block;
    margin: auto;
  }
  .title-box > p {
    margin: auto;
    padding: 20px 0;
    width: 90%;
  }
  form {
    margin: auto;
    width: 90%;
  }
  form button.message {
    background-color: black;
    color: white;
  }
`;

const Contact = () => {
  return (
    <ContactStyles id="contact">
      <div className="title-box">
        <h3>Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
      </div>
      <form>
        <input type="text" placeholder="Name" required name="Name" />
        <input type="text" placeholder="Email" required name="Email" />
        <input type="text" placeholder="Subject" required name="Subject" />
        <input type="text" placeholder="Comment" required name="Comment" />
        <button class="massage">SEND MESSAGE</button>
      </form>
    </ContactStyles>
  );
};

export default Contact;
