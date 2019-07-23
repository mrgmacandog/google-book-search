import React from "react";
import axios from "axios";

function handleSaveButton(props) {
    axios.post("/api/books", {
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.image,
        link: props.link
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

// function handleDeleteButton(props) {
//     axios.delete(`/api/books/${props._id}`)
//     .then(response => props.loadBooks())
//     .catch(err => console.log(err));
// }

function BookButtons(props) {
    return (
        <React.Fragment>
            <a className="waves-effect waves-light btn" href={props.link}><i className="material-icons left">remove_red_eye</i>view</a>
            {/* Second button will depend on page */}
            {props.page === "Search"
                ? <button className="waves-effect waves-light btn" onClick={() => handleSaveButton(props)}><i className="material-icons left">save</i>save</button>
                : <button className="waves-effect waves-light btn" onClick={() => props.deleteBook(props._id)}><i className="material-icons left">delete</i>delete</button>}
        </React.Fragment>
    );
}

export default BookButtons;