const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("dist"));
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

  phoneNumber
    ? response.json(phoneNumber)
    : response.status(400).end(`<p>ops wrong number</p>`);
});
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const phoneNumber = phoneBook.filter((phone) => phone.id === id);

  phoneNumber.length > 0
    ? response.status(204).end(console.log(phoneNumber))
    : response.status(404).end();
});

const generateId = () => {
  const maxId =
    phoneBook.length > 0 ? Math.max(...phoneBook.map((n) => n.id)) : 0;
  return maxId + 1;
};
const nameList = [...phoneBook.map((n) => n.name)];

app.post("/api/persons", (request, response) => {
  const person = request.body;
  if (!person.name || !person.number) {
    return response.status(405).json({
      content: JSON.stringify(person),
      error: "content missing",
    });
  }
  if (nameList.includes(person.name)) {
    return response.status(400).json({ error: "name Exists" });
  }

  const newPerson = {
    name: person.name,
    number: person.number,
    id: generateId(),
  };
  phoneBook.concat(newPerson);

  console.log(newPerson);
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
