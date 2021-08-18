import { assertEquals } from '../deps.ts'

import { HelloWorld } from './HelloWorld.ts'

Deno.test('Hello world text', () => {
  assertEquals(HelloWorld().content, 'Hello world!')
})

Deno.test('Hello world status code', () => {
  assertEquals(HelloWorld().statusCode, 200)
})
