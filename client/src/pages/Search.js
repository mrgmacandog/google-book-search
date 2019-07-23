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
        API.getBooksByTitle(this.state.search)
            .then(res => {
                console.log(res.data.items);
                this.setState({ results: res.data.items });
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
                <BookContainer
                    results={this.state.results}
                />
            </div>
        );
    }
}

export default Search;