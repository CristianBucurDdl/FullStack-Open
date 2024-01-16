/* eslint-disable react/prop-types */
const Person = ({ person }) => {
  return (
    <ul>
      <li>{person.name}</li>
      <p>{person.number}</p>
      <br />
    </ul>
  );
};

export default Person;
