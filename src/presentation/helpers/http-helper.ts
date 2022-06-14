import { HttpResponse } from '@/protocols/http/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
