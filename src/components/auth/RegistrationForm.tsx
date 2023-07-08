import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { User } from "../../redux/actions/types";
import { register } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
type Props = ConnectedProps<typeof connector>;

const RegistrationForm: React.FC<Props> = ({ register }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    register(user);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="login-form">
      <div className="title">Sign Up</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            className="login-input"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>

        <div className="button-container">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="register-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

const connector = connect(null, { register });

export default connector(RegistrationForm);
