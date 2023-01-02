import React, { useReducer, useEffect, useState } from 'react';
import HealthBar from './HealthBar.jsx';
import ActionsBox from './ActionsBox.jsx';
import defaultGame from '../game-logic/defaultGame.js';
import gameReducer from '../game-logic/gameReducer.js';
import AlwaysScrollToBottom from './AlwaysScrollToBottom.jsx';
import * as abilities from '../game-logic/abilities.js';
import audio from '../assets/wobbegong-roar.wav';

// const defaultState = {

// };
const roar = new Audio(audio);
roar.volume = 0.3;

const GameBox = (props) => {
  const [state, dispatch] = useReducer(gameReducer, defaultGame); // empty initial obj will eventually be from auth context

  useEffect(() => {
    // if player hp || enemy hp = 0, lose/win condition
    if (!state.gameOver && state.enemy.currentHP <= 0) {
      // roar.play();
      dispatch({ type: 'CHANGE_ENEMY' });
    } else if (!state.gameOver && state.player.currentHP <= 0)
      dispatch({ type: 'PLAYER_LOSES' });
    else if (!state.isPlayerTurn && !state.gameOver) {
      setTimeout(dispatch, 1500, {
        type: 'ENEMY_ATTACK',
        payload: abilities.attack,
      });
      setTimeout(updateState, 1500);
    }
  }, [state]);

  const [btnState, setBtnState] = useState(false);
  let toggleClassCheck = btnState ? ' anime' : ' hurt';
  let reverseClassCheck = btnState ? ' hurt' : ' enemy-anime';

  function updateState() {
    setBtnState(!btnState);
  }

  function resetGame() {
    document.querySelector('.death-box').style.display = 'none';
    dispatch({ type: 'RESET_GAME' });
  }

  return (
    <div className="game-box">
      <div className="death-box">
        You Died
        <button className="action-btn" onClick={resetGame}>
          Play again
        </button>
      </div>
      <div className="enemy-area">
        <div className="enemy-info">
          <div className="enemy-health">
            Enemy Health
            <HealthBar
              currentHP={state.enemy.currentHP}
              maxHP={state.enemy.maxHP}
            />
          </div>
        </div>
        <img
          src={require(`../assets/${state.enemy.img}`)}
          className={`enemy-image${reverseClassCheck}`}
        />
      </div>
      <div className="bottom-screen">
        <div className="player-area">
          <img
            src={require('../assets/mainCharacter.png')}
            className={`player-image${toggleClassCheck}`}
          />
          <div className="player-info">
            <div className="player-health">
              Player Health
              <HealthBar
                currentHP={state.player.currentHP}
                maxHP={state.player.maxHP}
              />
            </div>
            <div className="player-actions">
              Player actions
              <ActionsBox
                dispatch={dispatch}
                state={state}
                update={updateState}
              />
            </div>
          </div>
        </div>
        <div className="dialog-box">
          {/* DIALOG HERE */}
          {state.messages.map((message, index) => (
            <p key={`message${index}`}>{message}</p>
          ))}
          <AlwaysScrollToBottom />
        </div>
      </div>
    </div>
  );
};

export default GameBox;
