import React from 'react';

const HeaderBox = (props) => {
    return (
        <div className='headerBox'>
            <h1>Battle Game</h1>
            <button>Logout</button>
            <button>Delete</button>
            <button>Change Password</button>
        </div>
    )
}

export default HeaderBox;