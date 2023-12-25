import { Hono } from 'https://deno.land/x/hono@v3.11.10/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Deno!')
})

app.get('/wappasutei',(c)=>{
  return <html><>
})
Deno.serve(app.fetch)
