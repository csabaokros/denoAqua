import { Aqua, config } from "./deps.ts"
import { HelloWorld } from './src/routes/HelloWorld.ts'

const {
  SERVER_PORT,
} = config({safe: true});

const app = new Aqua(Number(SERVER_PORT) || 80)

app.get("/", HelloWorld)
