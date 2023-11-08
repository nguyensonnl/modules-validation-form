import React, { useState } from "react";
import "./Login.scss";
import * as yup from "yup";

interface IUser {
  email: string;
  password: string;
}

const LoginV3 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<any>();

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
    password: yup.string().required("Password là bắt buộc"),
  });

  const handleSumit = () => {
    const data: IUser = {
      email,
      password,
    };

    //validateErrors là array, chứa danh sách các lỗi
    //inner: Mảng các lỗi con trong đối tượng được kiểm tra
    // path: Đường dẫn đến trường dữ liệu gây ra lỗi
    // message: Thông báo lỗi mô tả lý do tại sao dữ liệu không hợp lệ
    userSchema
      .validate(data, { abortEarly: false })
      .then(() => {
        console.log(data);
      })
      .catch((validateErrors) => {
        console.log(validateErrors.inner.map((item: any) => item.path));
        const errors: any = {};

        validateErrors.inner.forEach((error: any) => {
          errors[error.path] = error.message;
        });

        setError(errors);
      });
  };

  return (
    <div className="login__page">
      <h3 className="heading">Login your account</h3>
      <div className="content">
        <div className="form__group">
          <label>
            <span>*</span> Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="item__input"
          />
          {error?.email && <div>{error?.email}</div>}
        </div>
        <div className="form__group">
          <label>
            <span>*</span> Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="item__input"
          />
          {error?.password && <div>{error?.password}</div>}
        </div>
        <button className="btn btn-login" onClick={handleSumit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginV3;
