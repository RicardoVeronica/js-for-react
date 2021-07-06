import { returnAnArray, characters } from '../05-array_destructuring/index'

describe("Array destructuring test", () => {

  test("returnAnArray function should return an array", () => {

    const list = characters
    const newList = [...list, 'Berserker']
    const returnList = returnAnArray(newList)

    expect(newList).toBe(returnList)
    expect(typeof newList).toBe('object')
    expect(typeof newList[3]).toBe('string')
    expect(newList[3]).toBe('Berserker')

  })
})
