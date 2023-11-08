import { useState } from "react";
import "./Login.scss";

/*
- Validation hiển thị tất cả input
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

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorData, setErrorData] = useState<IErrorData>({
    isErrorEmail: "",
    isErrorPassword: "",
    isError: "",
  });

  const handleValidationForm = () => {
    const errors: IErrorData = {};

    if (!email) {
      errors.isErrorEmail = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.isErrorEmail = "Email không đúng định dạng";
    }

    if (!password) {
      errors.isErrorPassword = "Mật khẩu không được để trống";
    }

    return errors;
  };

  const handleSumit = () => {
    const data: IUser = {
      email,
      password,
    };

    const error = handleValidationForm();
    setErrorData(error);

    if (Object.keys(error).length === 0) {
      if (email === "abc@gmail.com" && password === "123456") {
        console.log(data);
      } else {
        error.isError = "Email hoặc mật khẩu không đúng";
        setErrorData(error);
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

export default Login;
