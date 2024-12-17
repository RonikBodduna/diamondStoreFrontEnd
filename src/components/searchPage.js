import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q'); // Get the search query from the URL

  return (
    <div>
      <h1>Search Results</h1>
      {searchQuery ? (
        <p>Showing results for: <strong>{searchQuery}</strong></p>
      ) : (
        <p>No search term provided</p>
      )}
      {/* You can display actual search results here */}
    </div>
  );
}

export default SearchPage;
