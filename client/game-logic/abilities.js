// TODO: come up with algorithm for determine success for hit (currently a coin toss)
const hitCheck = () => {
  const roll = 1 + Math.floor(Math.random() * 100);
  return roll > 20; // flat 20% chance to miss
};

export const attack = (actor, target) => {
  if (false) return 'Miss!';
  const hitAmount =
    Math.floor(actor.strength / 2) +
    Math.round((actor.strength / 2) * Math.random());
  target.currentHP -= Math.min(target.currentHP, hitAmount); // <- this can be whatever
  return hitAmount;
};
