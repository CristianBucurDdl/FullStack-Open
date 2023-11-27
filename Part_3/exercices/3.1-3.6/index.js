const express = require("express");
const app = express();

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
const currentDate = new Date().toLocaleString();

// const infoContent = (
//   <p>{`Phonebook has info for ${phoneBook.length} people `}</p>
// );

app.get("/api/persons", (request, response) => {
  response.json(phoneBook);
});

app.get("/info", (request, response) => {
  response.writeHead(200, { "Content-type": "html" });
  response.end(
    `<p>Phonebook has info for ${phoneBook.length} people</p><br/> <p>${currentDate}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const phoneNumber = phoneBook.find((phone) => phone.id === id);

  phoneNumber ? response.json(phoneNumber) : response.status(400).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
