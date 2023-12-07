/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&apos;s standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
);

const Notes = ({ notes }) => (
  <div>
    {console.log(notes)} <h2>Notes</h2>
    <ul>
      {notes.map((note) => (
        // <li key={note.id}>{note.content}</li>
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.content}</Link>
        </li>
      ))}
    </ul>
  </div>
);
const Note = ({ notes }) => {
  const id = useParams().id;
  const note = notes.find((n) => n.id === Number(id));
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
    </div>
  );
};
<ul></ul>;
const Users = () => (
  <div>
    <h2>TKTL notes app</h2>
    <ul>
      <li>Matti Luukkainen</li>
      <li>Juha Tauriainen</li>
      <li>Arto Hellas</li>
    </ul>
  </div>
);
const LogIn = (props) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin("mluukkai");
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const padding = {
  padding: 5,
};
function App() {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const [notes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
      user: "Matti Luukkainen",
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
      user: "Matti Luukkainen",
    },
    {
      id: 3,
      content: "Most important methods of HTTP-protocol are GET and POST",
      important: true,
      user: "Arto Hellas",
    },
  ]);
  console.log(notes);
  return (
    <>
      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link style={padding} to="/notes">
            Notes
          </Link>
          <Link style={padding} to="/users">
            Users
          </Link>
          {user ? (
            <em>{user}</em>
          ) : (
            <Link style={padding} to="/login">
              {" "}
              Log in
            </Link>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/notes/:id" element={<Note notes={notes} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LogIn onLogin={login} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
