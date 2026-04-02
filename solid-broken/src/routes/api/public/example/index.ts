import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/api/public/example/')({
  server: {
    handlers: {
      GET: ({ context }) => {
        // 'context' is incorrectly typed as undefined
        const { acceptsGzip } = context

        // but the 'acceptsGzip' field is correctly set
        return new Response('context: ' + JSON.stringify(context))
      },
    },
  },
})
