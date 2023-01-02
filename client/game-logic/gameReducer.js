

const gameReducer = (state, action) => {
    // TODO: consider update passing a deep copy to various functions
    const newState = {messages: [...state.messages], gameOver: state.gameOver};
    switch (action.type) {
        case 'PLAYER_ATTACK': {
            newState.enemy = {...state.enemy};
            newState.player = {...state.player};
            newState.messages.push(`You attack ${newState.enemy.type}`);
            const result = action.payload(newState.player, newState.enemy);
            if (typeof result === 'number') newState.messages.push(`The ${newState.enemy.type} loses ${result} hit points!`);
            else newState.messages.push(result)
            break;
        }
        case 'ENEMY_ATTACK': {
            newState.enemy = {...state.enemy};
            newState.player = {...state.player};
            newState.messages.push(`${newState.enemy.type} attacks you`);
            const result = action.payload(newState.enemy, newState.player);
            if (typeof result === 'number') newState.messages.push(`You lose ${result} hit points!`);
            else newState.messages.push(result)
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