import React from "react";
import BookItem from "../BookItem";

function BookContainer(props) {
    return (
        <React.Fragment>
            {
                // Check if there are any results
                props.results !== undefined
                    // Check which page component state
                    ? (props.page === "Search"
                        // Map over the results of the search
                        ? (props.results.map(book => (
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
                        )))
                        // Map over the results of the database query
                        : (props.results.map(book => (
                            <BookItem
                                page={props.page}
                                key={book.id}
                                id={book.id}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.infoLink}
                            />
                        )))
                    )
                    // If result is undefined
                    : (<p>No results found</p>)
            }
        </React.Fragment>
    );
}

export default BookContainer;