import express from "express"

const app = express()

app.get("/user/:name", async (req, res) => {
  const name = req.params.name
  try {
    const userJson = await getUserFromDb(name)
    res.json(userJson)
  } catch(err) {
    res.status(404)
    // The user will know the depdendencies and layout of
    // the server's codebase.
    res.send(err)
    // Also harmful: res.send(err.stack), res.write(err.message) etc.
  }
})
