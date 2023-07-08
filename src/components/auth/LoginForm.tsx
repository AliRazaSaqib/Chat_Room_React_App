import React, { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { login } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { clearError } from "../../redux/actions/index";

type Props = ConnectedProps<typeof connector>;

const LoginForm: React.FC<Props> = ({ login }) => {
  const error = useSelector((state: RootState) => state.auth.error);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // Clear error after 2 seconds
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { username, password } = credentials;
    login(username, password);
  };

  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      {error && <div className="error">{error}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>

        <div className="button-container">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

const connector = connect(null, { login });

export default connector(LoginForm);
