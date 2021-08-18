import { connect, config } from './deps.ts'

const { REDIS_HOST, REDIS_PORT, REDIS_PASS } = config({ safe: true })

export const redis = await connect({
  hostname: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASS,
})
