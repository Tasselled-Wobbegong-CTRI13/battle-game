// TODO: come up with algorithm for determine success for hit (currently a coin toss)
const hitCheck = () => Math.round(Math.random());

export const attack = (actor, target) => {
  if (!hitCheck()) return 'Miss!';
  const hitAmount =
    Math.floor(actor.strength / 2) +
    Math.round((actor.strength / 2) * Math.random());
  target.currentHP -= Math.min(target.currentHP, hitAmount); // <- this can be whatever
  return hitAmount;
};
