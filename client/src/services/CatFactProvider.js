export const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.fact;
};

export const fetchTodos = async () => {
  const response = await fetch('http:alskfjlasdkjf');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.todos;
};
