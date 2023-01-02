// TODO: come up with algorithm for determine success for hit (currently a coin toss)
const hitCheck = (ATK, DEF) => {
  const roll = 1 + Math.floor(Math.random() * 100);
  return roll + ATK - DEF > 20; // flat 20% chance to miss
};

export const attack = (actor, target) => {
  if (!hitCheck(actor.ATK, target.DEF)) return 'Miss!';
  const hitAmount =
    Math.floor(actor.ATK / 2) + Math.round((actor.ATK / 2) * Math.random()); // <- strength can be whatever
  target.currentHP -= Math.min(target.currentHP, hitAmount);
  return hitAmount;
};
