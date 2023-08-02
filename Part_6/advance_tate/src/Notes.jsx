import { createStore } from "redux";

const Notes = () => {
  const notesReducer = (state = [], action) => {
    if (action.type === "NEW_NOTE") {
      state.push(action.payload);
      return state;
    }
    return state;
  };

  const store = createStore(notesReducer);
  store.dispatch({
    type: "NEW_NOTE",
    payload: {
      content: "the app state is in redux store",
      important: true,
      id: 1,
    },
  });

  store.dispatch({
    type: "NEW_NOTE",
    payload: {
      content: "state changes are made with actions",
      important: "false",
      id: 2,
    },
  });

  return (
    <div>
      <h1>Notes:</h1>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content}
            <strong>{note.important ? " important" : " "}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
// const renderApp = () => {
//   root.render(<App />);
// };
// // renderApp();
// store.subscribe(renderApp);
export default Notes;
