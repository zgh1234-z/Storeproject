import React from "react";
import "./Login.css";

function Login() {
  // const isRequiredvalid = checkRequired([
  //   username,
  //   email,
  //   password,
  //   confirmpassword,
  // ]);

  // const pattern = new RegExp("^[a-zA-z0-9-.+-]=@[a-zA-ZO-9-]=.[a-zA-ZO-9-.]=$");
  // const regexresult = pattern.test(useremail);

  const handleClick = () => {
    if (username.value.iength < 6) {
      return <small> نام کاربری باید بیشتر از 6 حرف داشته باشد</small>;
    } else if (!regexresult) {
      return <small> ایمیل معتبر نمی باشد</small>;
    } else if (password.value.length < 8) {
      return <small>پسورد حداقل باید 8 کاراکتر داشته باشد </small>;
    } else if (password != passconfirm) {
      return <small>پسورد های وارد شده مطابقت ندارند </small>;
    } else {
      return <small>ثبت نام با موفقیت انجام شد </small>;
    }
  };

  return (
    <div className="v">
      <div className="form">
        <h1>ورود / ثبت نام </h1>
        <input type="text" id="username" placeholder="نام کاربری " />
        {/* <label htmlFor="username">نام کاربری</label> */}
        <small></small>
        <input type="text" id="useremail" placeholder="ایمیل" />
        {/* <label htmlFor="useremail">ایمیل</label> */}
        <small></small>
        <input type="text" id="userpassword" placeholder="رمزورود" />
        {/* <label htmlFor="userpassword">رمزورود</label> */}
        <small></small>
        <input type="text" id="confirmpassword" placeholder="تکرار رمز ورود" />
        {/* <label htmlFor="confirmpassword">تکرار رمز ورود </label> */}
        <small></small>
        <button onClick={handleClick}>ارسال</button>
      </div>
    </div>
  );
}

export default Login;
