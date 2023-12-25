import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Deno!')
})

app.get('/wappasutei',(c)=>{
  return c.text('fuck ctkp')
})
Deno.serve(app.fetch)
