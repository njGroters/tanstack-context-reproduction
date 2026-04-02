import { createFileRoute } from '@tanstack/solid-router'
import { addSupportToContext } from '../route'

export const Route = createFileRoute('/api/public/example/direct')({
  server: {
    middleware: [addSupportToContext],
    handlers: {
      GET: ({ context }) => {
        // 'context' is incorrectly typed as undefined
        const { supportsGzip } = context

        // but the 'supportsGzip' field is correctly set
        return new Response('context: ' + JSON.stringify(context))
      },
    },
  },
})
