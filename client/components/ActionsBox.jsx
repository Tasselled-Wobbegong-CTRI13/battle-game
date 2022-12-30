import React from 'react';
import * as abilities from '../game-logic/abilities.js';

const ActionsBox = (props) => {

    const attack = () => {
        props.dispatch({ type: 'PLAYER_ATTACK', payload: abilities.attack });
    }

    return (
        // when selecting action, dispatch({ type: our_action })
        <div>
            <button 
            className="action-btn" 
            onClick={attack}
            disabled={!props.isPlayerTurn}>
                Attack
            </button>
        </div>
    )
}

export default ActionsBox;