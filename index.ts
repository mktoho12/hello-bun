Bun.serve({
  port: Bun.env.PORT ?? 3000,
  fetch(req) {
    return new Response(`Hello world!`, {
      headers: { Server: 'Bun' },
    })
  },
})
