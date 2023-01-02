import defaultPlayer from './defaultPlayer';
import skeleton from './skeleton';
import bossEnemy from './bossEnemy';

const defaultGame = {
  player: defaultPlayer,
  enemy: skeleton,
  messages: [],
  isPlayerTurn: true,
  gameOver: false,
  enemyList: [bossEnemy],
};

defaultGame.messages.push(`You've encountered a ${defaultGame.enemy.type}`);

export default defaultGame;
