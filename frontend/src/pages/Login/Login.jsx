import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmpassword, setConfirmpassword] = useState("");

  const [message, setMessage] = useState("");

  const handleClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.length < 4) {
      setMessage("نام کاربری باید بیشتر از 4 حرف باشد ");
    } else if (!emailPattern.test(email)) {
      setMessage("ایمیل معتبر نمی باشد ");
    } else if (password.length < 8) {
      setMessage("پسورد باید بیشتر ار 8 کاراکتر باشد ");
    } else if (password !== confirmpassword) {
      setMessage("پسورد های وارد شدهمطابقت ندارد ");
    } else {
      setMessage("ثبت نام با موفقیت انجام شد ");
    }
  };

  return (
    <div className="v">
      <div className="form">
        <h1>ورود / ثبت نام </h1>

        <input
          type="text"
          placeholder="نام کاربری "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <small></small>
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمزورود"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="تکرار رمز ورود "
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />

        <button onClick={handleClick}>ارسال</button>

        <small>{message}</small>
      </div>
    </div>
  );
}

export default Login;
