import http from "http"

http.createServer((req, _res) => {
  console.log(req.query.username)
})
