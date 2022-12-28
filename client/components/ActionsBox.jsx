import React from 'react';

const ActionsBox = (props) => {

    const attack = () => {
        props.dispatch({ type: 'ATTACK', payload: 10 })
    }

    return (
        // when selecting action, dispatch({ type: our_action })
        <div>
            <button className="action-btn" onClick={attack}>Attack</button>
        </div>
    )
}

export default ActionsBox;