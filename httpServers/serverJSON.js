const http = require("http");

const port = 3000;

let users = [
  {
    name: "Jack",
    email: "jack@gmail.com",
    city: "Vancouver",
  },
  {
    name: "Ellie",
    email: "ellie@yahoo.com",
    city: "Toronto",
  },
  {
    name: "Tim",
    email: "tim@gmail.com",
    city: "Seattle",
  },
  {
    name: "Kate",
    email: "kate@outlook.com",
    city: "San Francisco",
  },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let response = {
    status: 200,
    message: "successful",
    data: users,
  };
  res.end(JSON.stringify(response));
});

server.listen(port, () => {
  console.log("Server is listening on port ", port);
});
