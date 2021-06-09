import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border border-purple-200 w-full text-gray-700 mr-3 py-2 px-4 leading-tight focus:outline-none rounded"
            type="text"
            placeholder="Search Image..."
          />
          <button
            className="flex-shrink-0 text-purple-700 border border-purple-200 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 hover:text-white py-2 px-5 rounded focus:outline-none"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
