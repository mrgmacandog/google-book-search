import React from "react";

function BookSearch(props) {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">book</i>
                        <input id="icon_prefix" type="text" className="validate" onChange={props.handleInputChange} />
                        <label htmlFor="icon_prefix">Book Title</label>
                    <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={props.handleFormSubmit}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BookSearch;