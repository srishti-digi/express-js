import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send({ msg: "hello" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, userName: "ghehe", displayName: "hdhd" },
    { id: 2, userName: "ghehhe", displayName: "hdhjud" },
    { id: 3, userName: "ghghehe", displayName: "hduyhd" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 13, name: "gjfhehe", price: 589 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
