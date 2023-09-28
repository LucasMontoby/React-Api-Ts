// src/api.ts
const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/todos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: any[] = await response.json(); // Asigna un tipo adecuado (en este caso, any[])
    return data;
  } catch (error: any) { // Tipamos 'error' como 'any'
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
