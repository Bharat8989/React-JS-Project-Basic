import React, { useRef } from 'react';
import Card from './Card.jsx';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      h1Tag:'HTML',
      desc1: {one:'HTML Basics & Structure', two:'Semantic HTML Elements' ,three:'Forms & Input Handling', four:'HTML Attributes & Entities',five:'HTML5 New Features'},
      fileSize: 'clickMe',
      close: false,
      tag: { isOpen: false, tagTitle: "Update", tagColor: 'green' },
    },
    {
        h1Tag:'CSS',
        desc1: {one:'CSS Fundamentals & Syntax', two:'Selectors & Specificity' ,three:'Box Model & Layout Techniques', four:'Flexbox & Grid Layouts',five:'Responsive Design & Media Queries'},
      fileSize: 'clickMe',
      close: false,
      tag: { isOpen: false },
    },
    {
        h1Tag:'JAVASCRIPT',
        desc1: {one:'JavaScript Essentials & Syntax', two:'DOM Manipulation & Events' ,three:'Functions & Scope', four:'Asynchronous JavaScript (Promises, Async/Await)',five:'ES6+ Features & Modern Practices'},
      fileSize: 'clickMe',
      close: false,
      tag: { isOpen: false },
    },
    {
        h1Tag:'REACT',
        desc1: {one:'React Basics & Component Structure', two:'State Management & Props' ,three:'Lifecycle Methods & Hooks', four:'Event Handling & Conditional Rendering',five:'React Router & Navigation'},
      fileSize: 'clickMe',
      close: false,
      tag: { isOpen: false },
    },
  ];

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/4 flex gap-5 flex-wrap p-6'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;