import React from 'react';
// import { Data } from './Data';
const Card = ({ item }) => {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {item.map((val, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <img src={val.imgPath} alt={val.projectTitle} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{val.projectTitle}</h2>
            <p className="text-gray-600 mb-4">{val.description}</p>
            <div className="flex justify-between items-center">
              <a href={val.HostLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
              <a href={val.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
