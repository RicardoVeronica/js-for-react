import { getHeroeById, getHeroeByOwner } from '../06-import-export/index'
import heroes from '../06-import-export/data/heroes'

describe("test heroes functionality", () => {
  test("should return heroe data", () => {

    const id = 4
    const heroId = getHeroeById(id)

    expect(heroId).toBe(heroes[3])
    expect(typeof heroId).toBe('object')
    expect(heroId.name).toBe('Wolverine')
    expect(heroId.owner).toBe('Marvel')

  })

  test("should return heroes array", () => {

    const heroOwner = getHeroeByOwner('DC')

    expect(heroOwner).toStrictEqual([heroes[0], heroes[1], heroes[2]])
    expect(typeof heroOwner).toEqual('object')
    expect(heroOwner.length).toEqual(3)

  })
})
