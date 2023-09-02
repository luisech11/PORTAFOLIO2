import React from 'react';

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-6"
    >
      {children}
    </h1>
  );
}


export default Title;