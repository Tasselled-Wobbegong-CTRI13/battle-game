export const attack = (actor, target) => {
    // TODO: check if hit or miss
    const hitAmount = Math.floor(actor.strength / 2) + Math.floor(1 + actor.strength / 2 * Math.random());
    target.currentHP -= Math.min(target.currentHP, hitAmount); // <- this can be whatever
    return hitAmount;
};