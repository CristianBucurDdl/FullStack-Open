import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const newAnecdote = async (content) => {
  // const object = { content };
  const initialResponse = await axios.get(baseUrl);
  const newAnecdotes = initialResponse.data.slice();
  // newAnecdotes.push(content);
  console.log(initialResponse.data);

  const transformedAnecdotes = initialResponse.data.map((content, index) => ({
    id: index, // Use the index as a simple id
    content,
  }));
  console.log(transformedAnecdotes);
  const response = await axios.post(baseUrl, {
    anecdotes: transformedAnecdotes,
  }); // Post the updated array
  return response.data;
};

export default { getAll, newAnecdote };
