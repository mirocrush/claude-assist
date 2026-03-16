import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Hello, React!</h1>
        <p className="text-gray-500">Built with Webpack + Tailwind CSS</p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
          >
            −
          </button>
          <span className="text-2xl font-semibold w-10">{count}</span>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
