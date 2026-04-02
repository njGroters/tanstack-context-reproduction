import { createFileRoute } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'

export const addSupportToContext = createMiddleware().server(
  async ({ next, request }) => {
    const acceptEncodingHeader = request.headers.get('accept-encoding') || ''

    const supportsGzip = acceptEncodingHeader.includes('gzip')

    return await next({ context: { supportsGzip } })
  },
)

export const Route = createFileRoute('/api/public')({
  server: {
    middleware: [addSupportToContext],
  },
})
