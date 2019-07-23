import React from "react";

function BookButtons(props) {
    return (
        <React.Fragment>
            <a className="waves-effect waves-light btn" href={props.link}><i className="material-icons left">remove_red_eye</i>view</a>
            {/* Second button will depend on page */}
            {props.page === "Search"
                ? <button className="waves-effect waves-light btn" onClick={() => props.addBook(props)}><i className="material-icons left">save</i>save</button>
                : <button className="waves-effect waves-light btn" onClick={() => props.deleteBook(props._id)}><i className="material-icons left">delete</i>delete</button>}
        </React.Fragment>
    );
}

export default BookButtons;