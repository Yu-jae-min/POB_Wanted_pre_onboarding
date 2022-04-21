import React, { useState } from "react";
import "./Input.scss";

const Input = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [inputValue, setInputValue] = useState({ mail: "", pw: "" });
  const [invalidShow, setInvalidShow] = useState(false);

  const { mail, pw } = inputValue;
  const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  const emailChecking = emailRegex.test(inputValue.mail);

  const addInputValues = (event) => {
    const { name, value } = event.target;
    const nextInput = { ...inputValue, [name]: value };
    setInputValue(nextInput);

    invalidHideHandler();
  };

  const pwShowHandler = () => {
    setBtnActive(!btnActive);
  };

  const invalidShowHandler = () => {
    if(mail.length && !emailChecking) setInvalidShow(true);
  }

  const invalidHideHandler = () => {
    if(emailChecking) setInvalidShow(false);
  }


  return (
    <div id="Input">
      <h1 className="title">4. Input</h1>
      <div className="container">
        <p className="inputTitle">E-mail</p>
        <div className="inputWrap">
          <input
            name="mail"
            valus={mail}
            type="text"
            placeholder="E-mail"
            onChange={addInputValues}
          />
          <div
            className="inputIcon"
            name="checkBtn"
            style={{
              background: emailChecking ?
              'center / contain no-repeat url(/images/email_check_on.png)' :
              'center / contain no-repeat url(/images/email_check_off.png)'
            }}
          />
        </div>
        {invalidShow && <p className="warning">invalid e-mail address.</p>}
      </div>
      <div className="container">
        <p className="inputTitle">Password</p>
        <div className="inputWrap">
          <input
            name="pw"
            value={pw}
            type={btnActive ? "text" : "password"}
            placeholder="Password"
            onChange={addInputValues}
            onFocus={invalidShowHandler}
          />
          <button
            className="inputIcon inputEyeIcon"
            name="eyeBtn"
            style={{
              cursor: pw.length ? "pointer" : "default",
              background: btnActive ?
              'center / contain no-repeat url(/images/pw_show.png)' :
              'center / contain no-repeat url(/images/pw_hide.png)'
            }}
            onClick={pwShowHandler}
            disabled={!pw.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;