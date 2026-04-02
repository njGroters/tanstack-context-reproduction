import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/example/')({
  server: {
    handlers: {
      GET: ({ context }) => {
        // 'context' is correctly typed
        const { supportsGzip } = context

        // but the 'supportsGzip' field is correctlysupportsGzip  set
        return new Response('context: ' + JSON.stringify(context))
      },
    },
  },
})
