import roar from '../assets/wobbegong-roar.wav';

const maxHP = 9999;
// const abilities = ['ATK'];

const bossEnemy = {
  type: 'Tasselled Wobbegong',
  currentHP: maxHP,
  maxHP,
  strength: 999,
  img: 'wobbegong.jpeg',
  sound: roar,
  // abilities
};

export default bossEnemy;
