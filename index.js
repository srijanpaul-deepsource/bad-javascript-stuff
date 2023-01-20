app.get("/foo", (req, res) => {
  console.log(req.params.something)
})