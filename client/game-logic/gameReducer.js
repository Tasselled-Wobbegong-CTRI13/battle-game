const gameReducer = (state, action) => {
    const newState = {};
    switch (action.type) {
        case 'PLAYER_ATTACK': {
            newState.enemy = {...state.enemy};
            newState.enemy.currentHP -= action.payload;
            break;
        }
        case 'ENEMY_ATTACK': {
            newState.player = {...state.player};
            newState.player.currentHP -= action.payload; 
            break;
        }
        default: return state;
    }
    // if player hp || enemy hp = 0, lose/win condition 
    newState.isPlayerTurn = !state.isPlayerTurn;
    return {...state, ...newState};
}

export default gameReducer;