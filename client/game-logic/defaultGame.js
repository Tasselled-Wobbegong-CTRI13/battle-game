import defaultPlayer from "./defaultPlayer";
import defaultEnemy from "./defaultEnemy";

const defaultGame = {
  player: defaultPlayer,
  enemy: defaultEnemy,
  messages: [`You've encountered a ${defaultEnemy.type}!!!`],
  isPlayerTurn: true,
  gameOver: false
};

export default defaultGame;