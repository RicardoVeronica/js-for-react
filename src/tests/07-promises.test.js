import { getHeroeByIdAsync } from '../07-promises/index'
import heroes from '../06-import-export/data/heroes'

describe('Test async functions', () => {
  test("should return hero by id or error", (done) => {

    const id = 1

    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBe(heroes[0])
        done()
      })

  })

  test('should return an error if hero does not exist', (done) => {

    const id = 10

    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe("ID de heroe no existe")
        done()
      })
  })
})
