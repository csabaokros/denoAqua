import { Response } from '../../deps.ts'

export const HelloWorld = () : Response => {
    return {
        statusCode: 200,
        content: 'Hello world!',
    }
}
