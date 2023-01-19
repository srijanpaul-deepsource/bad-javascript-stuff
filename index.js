import http from "http"
import url from "url"

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  // Vulnerable! user can inject special characters in the terminal
  console.log(parsedUrl.query.username);
})
