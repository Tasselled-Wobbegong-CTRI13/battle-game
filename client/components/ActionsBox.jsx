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
            disabled={!props.state.isPlayerTurn}>
                Attack
            </button>
            <button className="action-btn">Abilities</button>
            <button className="action-btn">Items</button>
            <button className="action-btn">Run</button>
        </div>
    )
}

export default ActionsBox;