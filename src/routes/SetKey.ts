import type { Request, Response } from '../deps.ts'
import { redis } from '../redis.ts'

export const SetKey = async (req: Request): Promise<Response> => {
  const { key, value } = req.parameters

  const result: string = (await redis.set(key, value)) as string

  return {
    statusCode: result ? 200 : 500,
    content: result,
  }
}
