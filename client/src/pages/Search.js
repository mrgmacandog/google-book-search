import React, { Component } from "react";
import API from "../util/API";
import BookSearch from "../components/BookSearch";
import BookContainer from "../components/BookContainer";

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        API.getBooksByTitle(this.state.search)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <BookSearch
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
    
                <h2>Results</h2>
                <BookContainer />
            </div>
        );
    }
}

export default Search;