import React from 'react';

const Evn = () => {
  const getMoviesData = async () => { // Corrected function declaration
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}`); // Corrected the fetch call syntax
    //   const data = await response.json(); // Added data processing
      console.log(data); // Added a log to see the data
    } catch (error) {
      console.error("Error fetching data:", error); // Added error handling
    }
  };

  return (
    <div>
      <button onClick={getMoviesData}>Fetch Movies</button> {/* Added a button to trigger the function */}
    </div>
  );
};

export default Evn;
