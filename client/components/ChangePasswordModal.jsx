import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth.jsx';

const ChangePasswordModal = ({ displayState }) => {
  const [updateErrorModalStatus, setUpdateErrorModalStatus] =
    useState('hidden');
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  async function updatePassword(username, password, newPassword, event) {
    try {
      event.preventDefault();
      fetch(
        `/api/users?${new URLSearchParams({ username, password }).toString()}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAuth(null);
            navigate('/');
          } else {
            setUpdateErrorModalStatus('visible');
          }
        });
    } catch (err) {
      console.error(err);
    }
  }

  const updateErrorModalStyle = {
    color: 'red',
    visibility: updateErrorModalStatus,
    position: 'relative',
    top: '-15px',
  };

  return (
    <form
      style={{ display: displayState ? 'block' : 'none' }}
      className="modal-form"
      onSubmit={(e) =>
        updatePassword(
          document.querySelector('#u-username').value,
          document.querySelector('#u-password').value,
          document.querySelector('#u-new-password').value,
          e
        )
      }
    >
      <h4>Fill out below form to update password</h4>
      <hr />
      <label htmlFor="u-username">Username</label>
      <input
        className="inputClass"
        id="u-username"
        type="text"
        name="username"
      />
      <label htmlFor="u-password" type="password">
        <br /> Current Password
      </label>
      <input
        className="inputClass"
        id="u-password"
        type="password"
        name="password"
      />
      <label htmlFor="u-new-password" type="password">
        <br /> New Password
      </label>
      <input
        className="inputClass"
        id="u-new-password"
        type="password"
        name="password"
      />
      <p style={updateErrorModalStyle}>Invalid username / password</p>
      <button className="modal-btn" type="submit">
        Confirm Update
      </button>
    </form>
  );
};

export default ChangePasswordModal;
