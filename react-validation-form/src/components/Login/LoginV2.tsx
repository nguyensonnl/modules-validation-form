import { useState } from "react";
import "./Login.scss";

/*
- Validation hiển thị từng input khi có lỗi
*/

interface IUser {
  email: string;
  password: string;
}

interface IErrorData {
  isErrorEmail?: string;
  isErrorPassword?: string;
  isError?: string;
}

const initStateError = {
  isErrorEmail: "",
  isErrorPassword: "",
  isError: "",
};

const LoginV2 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorData, setErrorData] = useState<IErrorData>(initStateError);

  const handleValidationForm = () => {
    // setErrorData(initStateError);

    if (!email) {
      setErrorData({
        ...initStateError,
        isErrorEmail: "Email không được để trống",
      });
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorData({
        ...initStateError,
        isErrorEmail: "Email không đúng định dạng",
      });
      return false;
    }

    if (!password) {
      setErrorData({
        ...initStateError,
        isErrorPassword: "Mật khẩu không được để trông",
      });
      return false;
    }

    return true;
  };

  const handleSumit = () => {
    const data: IUser = {
      email,
      password,
    };

    const error = handleValidationForm();

    if (error) {
      if (email === "abc@gmail.com" && password === "123456") {
        console.log(data);
      } else {
        setErrorData({
          ...initStateError,
          isError: "Email hoặc mật khẩu không đúng",
        });
      }
    }
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
          {errorData.isErrorEmail && (
            <div className="error">{errorData.isErrorEmail}</div>
          )}
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
          {errorData.isErrorPassword && (
            <div className="error">{errorData.isErrorPassword}</div>
          )}
        </div>
        {errorData.isError && <div className="error">{errorData.isError}</div>}

        <button className="btn btn-login" onClick={handleSumit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginV2;
