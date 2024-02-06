import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.setHeader("Content-type", "application/JSON").end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      name: "Jonh",
      id: 1,
      email: "teste@email.com",
    });

    return res.setHeader(201).end();
  }

  return res.setHeader(404).end("Not Found");
});

server.listen(3333);
