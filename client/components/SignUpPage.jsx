import React from 'react';

export default function SignUpPage() {

    async function signUp(username, password, email) {
        await fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password, email: email})
        })
    }

    return (
        <div className="containerBox">
            <h1 className="title">Sign Up for Battle!</h1>
            <div className="login-form">
                <label htmlFor='susername'>
                    <input id="susername" type="text" required></input>
                </label>
                <label htmlFor='spassword'>
                    <input id="spassword" type="password" required></input>
                </label>
                <label htmlFor='semail'>
                    <input id="semail" type="text" required></input>
                </label>
                <button onClick={() => signUp(document.querySelector('#susername').value, document.querySelector('#spassword').value, document.querySelector('#semail').value)}>Sign Up!</button>
            </div>
        </div>
    )
}