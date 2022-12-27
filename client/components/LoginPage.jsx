import React from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage = (props) => {
    const navigate = useNavigate();

    return (
        <div className="containerBox">
          <h1 className="title">Battle Game</h1>
          <form className="login-form" action="/users" method="GET">
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