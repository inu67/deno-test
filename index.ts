import { Hono } from 'https://deno.land/x/hono@v3.11.10/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Deno!')
})

app.get('/wappasutei',serveStatic({ path: './static/jojo.html' }))
Deno.serve(app.fetch)
