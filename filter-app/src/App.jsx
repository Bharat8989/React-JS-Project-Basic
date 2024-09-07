import React, { useState } from 'react';
import './App.css';
import Data from './Data.js';
import Card from './Card.jsx';

const App = () => {
  const [item, setItem] = useState(Data);
  const [categories] = useState(["All", ...new Set(Data.map((val) => val.category).flat())]);

  const filterItem = (category) => {
    if (category === "All") {
      setItem(Data);
      return;
    }
    const filteredData = Data.filter((val) => val.category.includes(category));
    setItem(filteredData);
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-4xl font-bold mt-10 mb-8'> Filter App</h1>

      <div className="flex justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Card item={item} />
    </div>
  );
};

export default App;
