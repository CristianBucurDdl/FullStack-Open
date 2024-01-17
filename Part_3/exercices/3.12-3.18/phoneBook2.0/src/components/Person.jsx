/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Person = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <div key={person.id}>
          <li>{person.name}</li>
          <p>{person.number}</p>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default Person;
