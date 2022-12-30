import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth.jsx';
import DeleteUserModal from './DeleteUserModal.jsx';

const HeaderBox = (props) => {

    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const logout = () => {
        setAuth({username: null});
        navigate('/');
    }

    return (
        <div className='headerBox'>
            <h1 className="gameTitle">Battle Game</h1>
            <div className="headerSub">
                <button className="header-btn" onClick={logout}>Logout</button>
                <button className="header-btn" onClick={() => setDeleteUserModal(!deleteUserModal)}>Delete</button>
                <DeleteUserModal displayState={deleteUserModal} />
                <button className="header-btn">Change Password</button>
            </div>
        </div>
    )
}

export default HeaderBox;