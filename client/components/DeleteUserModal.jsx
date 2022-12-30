import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth.jsx';

const DeleteUserModal = ({ displayState }) => {

    const navigate = useNavigate();
    const { setAuth } = useAuth();

    async function deleteUser(username, password, event) {
        try {
        event.preventDefault();
        // fetch(`/api/users?username=${username}&password=${password}`, {
        fetch(`/api/users?${new URLSearchParams({username, password}).toString()}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.success) {
            setAuth({username: null});
            navigate('/');
          }
        })
        .catch(err => console.error(err));
      } catch(err){
        console.error(err);
      }
    }

    return (
          <form style={{display: displayState ? 'block' : 'none'} } className="delete-user-form" onSubmit={(e) => deleteUser(document.querySelector('#username').value, document.querySelector('#password').value, e)}>
            <h4>Are you sure? Enter username and password below and confirm.</h4>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="inputClass" id="username" type="text" name="username" />
            <label htmlFor="password" type="password">Password</label>
            <input className="inputClass" id="password" type="password" name="password" />
            <button className="delete-btn" type="submit">Confirm Delete</button>    
          </form>
    )
}

export default DeleteUserModal;