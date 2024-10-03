import './App.css';
// src/App.js
import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';
import InfiniteScroll from './components/InfiniteScroll';

function App() {
  const [useInfiniteScroll, setUseInfiniteScroll] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 p-4 text-center text-white text-3xl font-bold">
        CAT GALLERY PROJECT
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Toggle between infinite scroll and pagination */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={useInfiniteScroll}
              onChange={(e) => setUseInfiniteScroll(e.target.checked)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700 text-3xl">Use Infinite Scroll</span>
          </label>
        </div>

        {useInfiniteScroll ? <InfiniteScroll /> : <Pagination />}
      </main>
    </div>
  );
}

export default App;
