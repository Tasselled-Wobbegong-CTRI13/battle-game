import React from 'react';

export default function SignUpPage() {

    async function signUp(username, password, email) {
        await fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password, email: email})
        })
    }

    return (
        <div className="containerBox">
            <h1 className="title">Sign Up for Battle!</h1>
            <div className="login-form">
                <label htmlFor='susername'>Username</label>
                <input className="inputClass" id="susername" type="text" required></input>
                <label htmlFor='spassword'>Password</label>
                <input className="inputClass" id="spassword" type="password" required></input>
                <label htmlFor='semail'>Email</label>
                <input className="inputClass" id="semail" type="text" required></input>
                <button className="signup-btn" onClick={() => signUp(document.querySelector('#susername').value, document.querySelector('#spassword').value, document.querySelector('#semail').value)}>Sign Up!</button>
            </div>
        </div>
    )
}