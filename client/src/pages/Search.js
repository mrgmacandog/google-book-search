import React from "react";
import BookSearch from "../components/BookSearch";
import BookContainer from "../components/BookContainer";

function Search() {
    return (
        <div className="container">
            <BookSearch/>

            <h2>Results</h2>
            <BookContainer />
        </div>
    );
}

export default Search;