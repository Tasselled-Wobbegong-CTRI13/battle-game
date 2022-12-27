import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from './useAuth.jsx';

const LoginPage = (props) => {

    const navigate = useNavigate();
    const { setAuth } = useAuth();

    async function login(username, password) {
        try {
        event.preventDefault();
        fetch(`/api/users?username=${username}&password=${password}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setAuth({username: data.username});
            navigate('/gameboard');
          }
        })
        .catch(err => console.error(err));
      } catch(err){
        console.error(err);
      }
    }

    return (
        <div className="containerBox">
          <h1 className="title">Battle Game</h1>
          <form className="login-form" onSubmit={() => login(document.querySelector('#username').value, document.querySelector('#password').value)}>
            <label htmlFor="username">Username</label>
            <input className="inputClass" id="username" type="text" name="username" />
            <label htmlFor="password" type="password">Password</label>
            <input className="inputClass" id="password" type="password" name="password" />
            <button className="login-btn" type="submit">Login</button>    
            <button className="signup-btn" type="button" onClick={() => navigate('/signup')}>Sign Up</button>
          </form>
        </div>

    )
}

export default LoginPage;