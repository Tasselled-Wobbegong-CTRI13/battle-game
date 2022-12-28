import React from 'react';

const ActionsBox = (props) => {

    const attack = () => {
        props.dispatch({ type: 'PLAYER_ATTACK', payload: 10 });
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