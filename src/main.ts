import { Aqua, config } from './deps.ts'
import { HelloWorld } from './routes/HelloWorld.ts'
import { GetKey } from './routes/GetKey.ts'
import { SetKey } from './routes/SetKey.ts'

const { SERVER_PORT } = config({ safe: true })

const app = new Aqua(Number(SERVER_PORT) || 80, {
  log: true,
  ignoreTrailingSlash: true,
})

console.log(`Server is up and listening on ${SERVER_PORT}`)

app.get('/', HelloWorld)
app.get('/:key', GetKey)
app.post('/:key/:value', SetKey)
