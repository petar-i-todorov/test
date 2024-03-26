import http from "http";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http:/localhost:3000").searchParams.get("url");
  console.log(url);
  console.log(url.test("oaoa"));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
