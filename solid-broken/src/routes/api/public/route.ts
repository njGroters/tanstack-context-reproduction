import { createFileRoute } from '@tanstack/solid-router'
import { createMiddleware } from '@tanstack/solid-start'

export const addIdentityToContext = createMiddleware().server(
  async ({ next, request }) => {
    const acceptEncodingHeader = request.headers.get('accept-encoding') || ''

    const supportsGzip = acceptEncodingHeader.includes('gzip')

    return await next({ context: { supportsGzip } })
  },
)

export const Route = createFileRoute('/api/public')({
  server: {
    middleware: [addIdentityToContext],
  },
})
