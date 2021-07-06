import heroes, { owners } from './data/heroes';

export const getHeroeById = (idHero) => {
  return heroes.find(heroe => heroe.id === idHero)
}

export const getHeroeByOwner = (ownerHero) => {
  return heroes.filter(heroe => heroe.owner === ownerHero)
}

// console.log(owners);
// console.log(getHeroeById(3))
// console.log(getHeroeByOwner("Marvel"))
