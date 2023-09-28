import { useEffect, useState } from 'react';
import { fetchItems } from '../Api/api';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    fetchItems()
      .then((data) => {
        const itemTitles = data.map((item: any) => item.title);
        setItems(itemTitles);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Elementos</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;

