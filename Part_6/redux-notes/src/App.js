import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { Vizibility } from "./components/vizibility";

const App = () => {
  return (
    <div>
      <NewNote />
      <Vizibility />
      <Notes />
    </div>
  );
};

export default App;
