/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// app.use(express.static("dist"));
const phoneBook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("api/persons", (request, response) => {
  response.json(phoneBook);
});
app.get("/persons", (request, response) => {
  response.status(401).json({
    error: " wrong address",
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
