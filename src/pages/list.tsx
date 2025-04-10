import { useState } from "react";

const List: React.FC = () => {
  const [items, setItems] = useState(() => Array.from({ length: 10000 }, (_, i) => `Item ${i}`));

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length}`]);
  };

  const add10Items = () => {
    setItems((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => `Item ${prev.length + i}`)]);
  }

  const removeItem = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  const remove10Items = () => {
    setItems((prev) => prev.slice(0, -10));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={add10Items}>Add 10 Items</button>
      <button onClick={removeItem}>Remove Item</button>
      <button onClick={remove10Items}>Remove 10 Items</button>

      <h1>List</h1>
      <p>Items: {items.length}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
