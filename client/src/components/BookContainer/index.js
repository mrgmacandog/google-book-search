import React from "react";
import BookItem from "../BookItem";

function BookContainer(props) {
    return (
        <React.Fragment>
            {props.results.map(book => (
                <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                />
            ))}
        </React.Fragment>
    );
}

export default BookContainer;