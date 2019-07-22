import React from "react";

function BookButtons() {
    return (
        <React.Fragment>
            {/* First button will depend on page */}
            <a className="waves-effect waves-light btn"><i className="material-icons left">remove_red_eye</i>view</a>
            <a className="waves-effect waves-light btn"><i className="material-icons left">delete</i>delete</a>
        </React.Fragment>
    );
}

export default BookButtons;