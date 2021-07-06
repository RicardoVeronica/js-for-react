import { getUser, activeUser } from '../03-functions'

describe("Tests in 03-functions", () => {

  test('should return an object', () => {

    const userTest = {
      uid: 'ABCDEF',
      username: 'Ricardo'
    }

    const user = getUser()

    expect(userTest).toStrictEqual(user)

  })

  test('shold return an object with uid and a name pass in params', () => {

    const name = "Pacman"

    const user = activeUser(name)

    expect(user).toStrictEqual({
      uid: 'ABC123',
      username: name
    })

  })

})
