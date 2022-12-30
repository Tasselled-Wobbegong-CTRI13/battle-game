export const attack = (actor, target) => {
    // TODO: check if hit or miss
    const hitAmount = actor.baseAttack + Math.floor(1 + Math.random() * actor.strength);
    target.currentHP -= hitAmount; // <- this can be whatever
    // console.log(hitAmount);
    return hitAmount;
};