

const gameReducer = (state, action) => {
    const newState = {messages: [...state.messages], gameOver: state.gameOver};
    switch (action.type) {
        case 'PLAYER_ATTACK': {
            newState.enemy = {...state.enemy};
            newState.player = {...state.player};
            newState.messages.push(`You attack the ${newState.enemy.type}`);
            const result = action.payload(newState.player, newState.enemy);
            newState.messages.push(`The skeleton loses ${result} hit points!`);
            break;
        }
        case 'ENEMY_ATTACK': {
            newState.enemy = {...state.enemy};
            newState.player = {...state.player};
            newState.messages.push(`You attack the ${newState.enemy.type}`);
            const result = action.payload(newState.enemy, newState.player);
            newState.messages.push(`The skeleton loses ${result} hit points!`);
            break;
        }
        case 'PLAYER_WINS': {
            newState.messages.push('You win');
            newState.gameOver = true;
            break;
        }
        default: return state;
    }
    // if (newState.player.currentHP <= 0 || newState.enemy.currentHP <= 0) {

    // }
    if (!newState.gameOver) newState.isPlayerTurn = !state.isPlayerTurn;
    // newState.isPlayerTurn = !state.isPlayerTurn;
    return {...state, ...newState};
}

export default gameReducer;