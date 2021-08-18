import type { Request, Response } from '../deps.ts'
import { redis } from '../redis.ts'

export const GetKey = async (req: Request): Promise<Response> => {
  const { key } = req.parameters

  const value = (await redis.get(key)) as string

  return {
    statusCode: value ? 200 : 404,
    content: value,
  }
}
