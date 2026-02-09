import React from "react";
import "./Comment.css";

function Comment() {
  return (
    <div className="comment">
      {/* <div>
        <p>نظرات کاربران </p>
        <input type="text" value={"نظرتان را بنویسید"}></input>
        <button type="submit" value={"save"}>
          ارسال{" "}
        </button>
      </div> */}
      <div>
        {/* <div className="user"> */}
        {/* <img src="./images/project1 (1).png"></img> */}
        {/* </div> */}
        <h4>نام کاربری</h4>
        <p>اولین نظر</p>
      </div>
      <div>
        <h4>نام کاربری</h4>
        <p>دومین نظر</p>
      </div>
      <div>
        <h4>نام کاربری</h4>
        <p>سومین نظر</p>
      </div>
      <div>
        <h4>نام کاربری</h4>
        <p>چهارمین نظر</p>
      </div>
    </div>
  );
}

export default Comment;
