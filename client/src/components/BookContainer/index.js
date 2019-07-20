import React from "react";
import BookItem from "../BookItem";

function BookContainer() {
    return (
        <React.Fragment>
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
        </React.Fragment>
    );
}

export default BookContainer;