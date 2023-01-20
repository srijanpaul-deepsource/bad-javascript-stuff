import express from "express"

const app = express()

app.get("/route", (_req, res) => {
  console.log(res.body.foo)
})
