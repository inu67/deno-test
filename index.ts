import { Hono } from 'https://deno.land/x/hono@v3.11.10/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'
const app = new Hono()

app.get('/', serveStatic({ path: './static/jojo.html' }))

app.get('/wappasutei',(c) => c.text('Hello! Hono!'))
Deno.serve(app.fetch)
