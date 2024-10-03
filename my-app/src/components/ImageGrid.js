import React from 'react';

const ImageGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <img src={item.url} alt="Cat" className="object-cover w-full h-48" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
