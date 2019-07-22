import React from "react";
import BookButtons from "../BookButtons";

function BookItem() {
    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Book Title</h3>
                        <h4>Author(s)</h4>
                        <p>Description</p>
                    </div>
                    <div className="card-action">
                        <BookButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookItem;