import React, { useReducer } from 'react';
import HealthBar from './HealthBar.jsx';
import ActionsBox from './ActionsBox.jsx';

const gameReducer = (state, action) => {
    switch (action.type) {
        default: return state
    }
}

// const defaultState = {
    
// };

const GameBox = (props) => {

    const [state, dispatch] = useReducer(gameReducer, {}); // empty initial obj will eventually be from auth context

    return (
        <div className='game-box'>
            <div className='enemy-area'>
                <div className='enemy-info'>
                    <div className='enemy-health'>
                        Enemy Health
                        <HealthBar />
                    </div>
                </div>
                <img src='https://helloartsy.com/wp-content/uploads/kids/halloween/easy_skeleton_drawing/easy-skeleton-drawing_step-6.jpg' className='enemy-image'/>
            </div>
            <div className='player-area'>
                <img src='https://media.istockphoto.com/id/1251355287/photo/medieval-knight-armor-isolated.jpg?s=1024x1024&w=is&k=20&c=m4karr3c5INpnfTn99d9lzMp5B2aiPPMQeervy4Nhuw=' className='player-image'/>
                <div className='player-info'>
                    <div className='player-health'>
                        Player Health
                        <HealthBar />
                    </div>
                    <div className='player-actions'>
                        Player actions
                        <ActionsBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameBox;