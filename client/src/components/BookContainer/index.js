import React from "react";
import BookItem from "../BookItem";

function BookContainer(props) {
    return (
        <React.Fragment>
            {props.page === "Search" ? <h2>Results</h2> : <h2>Saved Books</h2>}
            {
                props.results !== undefined
                    ? props.results.map(book => (
                        <BookItem
                            page={props.page}
                            key={book.id}
                            id={book.id}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                        />
                    ))
                    : <p>No results found</p>
            }
        </React.Fragment>
    );
}

export default BookContainer;