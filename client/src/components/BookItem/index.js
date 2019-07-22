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
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
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