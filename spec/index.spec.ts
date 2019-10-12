import Connpass from '../src'

describe('src/index.ts', () => {
  test('getEvents', async () => {
    expect.assertions(1)
    const connpass = new Connpass()
    const response = await connpass.getEvents({
      count: 3
    })
    expect(response.events.length).toBe(3)
  })
})
