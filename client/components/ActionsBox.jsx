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
            <button className="action-btn">Abilities</button>
            <button className="action-btn">Items</button>
            <button className="action-btn">Run</button>
        </div>
    )
}

export default ActionsBox;