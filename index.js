import http from "http"
import url from "url"

http.createServer((req, _res) => {
  const q = url.parse(req.url, true)
  console.log(q.query.username)
})
