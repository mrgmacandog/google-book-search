import React from "react";
import BookButtons from "../BookButtons";

function BookItem(props) {
    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>{props.title}</h3>
                        <p>{props.authors}</p>
                        <p>{props.description}</p>
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