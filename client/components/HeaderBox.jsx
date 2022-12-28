import React from 'react';

const HeaderBox = (props) => {
    return (
        <div className='headerBox'>
            <h1 className="gameTitle">Battle Game</h1>
            <div className="headerSub">
                <button className="header-btn">Logout</button>
                <button className="header-btn">Delete</button>
                <button className="header-btn">Change Password</button>
            </div>
        </div>
    )
}

export default HeaderBox;