import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth.jsx';
import DeleteUserModal from './DeleteUserModal.jsx';
import ChangePasswordModal from './ChangePasswordModal.jsx';

const HeaderBox = (props) => {
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const logout = () => {
    setAuth({ username: null });
    navigate('/');
  };

  const closeModals = (event) => {
    if (event.key === 'Escape') {
      setDeleteUserModal(false);
      setChangePasswordModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModals);
  }, []);

  return (
    <div className="headerBox">
      <h1 className="gameTitle">Battle Game</h1>
      <div className="headerSub">
        <button className="header-btn" onClick={logout}>
          Logout
        </button>
        <button
          className="header-btn"
          onClick={() => {
            setChangePasswordModal(false);
            setDeleteUserModal(!deleteUserModal);
          }}
        >
          Delete
        </button>
        <DeleteUserModal displayState={deleteUserModal} />
        <button
          className="header-btn"
          onClick={() => {
            setDeleteUserModal(false);
            setChangePasswordModal(!changePasswordModal);
          }}
        >
          Change Password
        </button>
        <ChangePasswordModal displayState={changePasswordModal} />
      </div>
    </div>
  );
};

export default HeaderBox;
