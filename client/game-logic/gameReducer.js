import defaultGame from './defaultGame';
const gameReducer = (state, action) => {
  // TODO: consider update passing a deep copy to various functions
  const newState = { messages: [...state.messages], gameOver: state.gameOver };
  switch (action.type) {
    case 'PLAYER_ATTACK': {
      newState.enemy = { ...state.enemy };
      newState.player = { ...state.player };
      newState.messages.push(`You attack ${newState.enemy.type}`);
      const result = action.payload(newState.player, newState.enemy);
      if (typeof result === 'number')
        newState.messages.push(
          `The ${newState.enemy.type} loses ${result} hit points!`
        );
      else newState.messages.push(result);
      newState.isPlayerTurn = !state.isPlayerTurn;
      break;
    }
    case 'ENEMY_ATTACK': {
      newState.enemy = { ...state.enemy };
      newState.player = { ...state.player };
      newState.messages.push(`${newState.enemy.type} attacks you`);
      const result = action.payload(newState.enemy, newState.player);
      if (typeof result === 'number')
        newState.messages.push(`You lose ${result} hit points!`);
      else newState.messages.push(result);
      newState.isPlayerTurn = !state.isPlayerTurn;
      break;
    }
    case 'PLAYER_WINS': {
      newState.messages.push('You win');
      newState.gameOver = true;
      break;
    }
    case 'PLAYER_LOSES': {
      newState.messages.push('You died');
      newState.gameOver = true;
      setTimeout(
        () => (document.querySelector('.death-box').style.display = 'flex'),
        1500
      );
      break;
    }
    case 'CHANGE_ENEMY': {
      // newState.enemy = state.enemyList[action.payload];
      newState.player = { ...state.player };
      newState.enemyList = [...state.enemyList];
      newState.enemy = newState.enemyList.shift();
      newState.messages.push(`A ${newState.enemy.type} appeared!`);
      const roar = new Audio(newState.enemy.sound);
      roar.volume = 0.1;
      roar.play();
      break;
    }
    case 'RESET_GAME': {
      return defaultGame;
    }
    default:
      return state;
  }
  // if (!newState.gameOver && !newState.player.currentHP <= 0)
  //   newState.isPlayerTurn = !state.isPlayerTurn;
  // newState.isPlayerTurn = !state.isPlayerTurn;
  return { ...state, ...newState };
};

export default gameReducer;
