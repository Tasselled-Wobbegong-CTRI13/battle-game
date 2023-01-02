import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth.jsx';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [errorModalStatus, setErrorModalStatus] = useState('hidden');

  async function login(username, password, event) {
    try {
      event.preventDefault();
      fetch(
        `/api/users?${new URLSearchParams({ username, password }).toString()}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAuth({ username: data.username });
            navigate('/gameboard');
          } else {
            setErrorModalStatus('visible');
          }
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  }

  const errorModalStyle = {
    color: 'red',
    visibility: errorModalStatus,
    position: 'relative',
    top: '-15px',
  };

  return (
    <div className="containerBox">
      <h1 className="title">Battle Game</h1>
      <form
        className="login-form"
        onSubmit={(e) =>
          login(
            document.querySelector('#username').value,
            document.querySelector('#password').value,
            e
          )
        }
      >
        <label htmlFor="username">Username</label>
        <input
          className="inputClass"
          id="username"
          type="text"
          name="username"
        />
        <label htmlFor="password" type="password">
          Password
        </label>
        <input
          className="inputClass"
          id="password"
          type="password"
          name="password"
        />
        <p style={errorModalStyle}>Invalid username / password</p>
        <button className="login-btn" type="submit">
          Login
        </button>
        <button
          className="signup-btn"
          type="button"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
