import React from "react";
import BookItem from "../BookItem";

function BookContainer(props) {
    return (
        <React.Fragment>
            {
                props.results !== undefined
                    ? props.results.map(book => (
                        <BookItem
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