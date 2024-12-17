import React from "react";
import { useLocation } from "react-router-dom";

function SearchResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log("QueryParams for search:" + queryParams);
    const searchQuery = queryParams.get("query");
    return (
        <div>
            <p>Search Result</p>
            {searchQuery ? (
                <p>
                    Showing results for: <strong>{searchQuery}</strong>
                </p>
            ) : (
                <p>No search query provided.</p>
            )}
        </div>
    )
}

export default SearchResult