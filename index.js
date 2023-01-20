import http from "http"
import url from "url"

http.createServer((req, _res) => {
  console.log(req.query.username)
})
