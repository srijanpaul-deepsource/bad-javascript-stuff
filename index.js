import express from "express"

const app = express()

app.get("/route", async (_req, res) => {
  console.log(res.body.foo)
})
