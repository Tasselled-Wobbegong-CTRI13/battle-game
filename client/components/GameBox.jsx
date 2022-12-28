import React, { useReducer, useEffect } from 'react';
import HealthBar from './HealthBar.jsx';
import ActionsBox from './ActionsBox.jsx';
import defaultGame from '../game-logic/defaultGame.js';
import gameReducer from '../game-logic/gameReducer.js';
import AlwaysScrollToBottom from './AlwaysScrollToBottom.jsx';

// const defaultState = {
    
// };

const GameBox = (props) => {

    const [state, dispatch] = useReducer(gameReducer, defaultGame); // empty initial obj will eventually be from auth context

    useEffect(() => {
        // if player hp || enemy hp = 0, lose/win condition 
        if (!state.gameOver && state.enemy.currentHP <= 0) dispatch({type: 'PLAYER_WINS'});
        else if (!state.isPlayerTurn && !state.gameOver) setTimeout(dispatch, 1500, {type: 'ENEMY_ATTACK', payload: 5})
    }, [state])

    return (
        <div className='game-box'>
            <div className='enemy-area'>
                <div className='enemy-info'>
                    <div className='enemy-health'>
                        Enemy Health
                        <HealthBar currentHP={state.enemy.currentHP} maxHP={state.enemy.maxHP} />
                    </div>
                </div>
                <img src='https://helloartsy.com/wp-content/uploads/kids/halloween/easy_skeleton_drawing/easy-skeleton-drawing_step-6.jpg' className='enemy-image'/>
            </div>
            <div className="bottom-screen">
                <div className='player-area'>
                    <img src='https://media.istockphoto.com/id/1251355287/photo/medieval-knight-armor-isolated.jpg?s=1024x1024&w=is&k=20&c=m4karr3c5INpnfTn99d9lzMp5B2aiPPMQeervy4Nhuw=' className='player-image'/>
                    <div className='player-info'>
                        <div className='player-health'>
                            Player Health
                            <HealthBar currentHP={state.player.currentHP} maxHP={state.player.maxHP} />
                        </div>
                        <div className='player-actions'>
                            Player actions
                            <ActionsBox dispatch={dispatch} isPlayerTurn={state.isPlayerTurn} />
                        </div>
                    </div>
                </div>
                <div className='dialog-box'>
                    {/* DIALOG HERE */}
                    {state.messages.map((message, index) => (<p key={`message${index}`}>{message}</p>))}
                    <AlwaysScrollToBottom />
                </div>
            </div>
        </div>
    )
}

export default GameBox;