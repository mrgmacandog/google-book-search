import React from "react";

function BookButtons(props) {
    return (
        <React.Fragment>
            <a className="waves-effect waves-light btn" href={props.link}><i className="material-icons left">remove_red_eye</i>view</a>
            {/* Second button will depend on page */}
            <button className="waves-effect waves-light btn"><i className="material-icons left">save</i>save</button>
        </React.Fragment>
    );
}

export default BookButtons;