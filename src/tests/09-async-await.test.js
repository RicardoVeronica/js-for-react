import { getImage } from '../09-async_await/index';

describe('Test async-await', () => {
  test('should return a gif url', async() => {

    const url = await getImage()

    expect(typeof url).toBe('string')
    expect(url.includes('https://')).toBe(true)

  })
})
