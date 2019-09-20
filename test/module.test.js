jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const getPort = require('get-port')

const config = require('../example/nuxt.config')
config.dev = false

let nuxt, port

describe('basic', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', () => {
    expect('LAZYTESTER').toContain('LAZYTESTER')
  })
})
