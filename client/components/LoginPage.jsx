import React from 'react';

const LoginPage = (props) => {

    return (
        <div className="containerBox">
          <h1 className="title">Battle Game</h1>
          <form className="login-form" action="/users" method="POST">
            <label htmlFor="username">Username</label>
            <input className="inputClass" id="username" type="text" name="username" />
            <label htmlFor="password" type="password">Password</label>
            <input className="inputClass" id="password" type="password" name="password" />
            <label htmlFor="email">Email</label>
            <input className="inputClass" id="email" type="email" name="email" />
            <button className="login-btn" type="submit">Login</button>    
          </form>
        </div>

    )
}

export default LoginPage;