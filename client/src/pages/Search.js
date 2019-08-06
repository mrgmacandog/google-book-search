import React, { Component } from "react";
import API from "../util/API";
import BookSearch from "../components/BookSearch";
import BookContainer from "../components/BookContainer";
import axios from "axios";

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

        // If there is something in the search box
        if (this.state.search !== "") {
            API.getBooksByTitle(this.state.search)
                .then(res => this.setState({ results: res.data.items }))
                .catch(err => console.log(err));
        }
    }

    addBook = props => {
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

    render() {
        return (
            <div className="container">
                <BookSearch
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <h2>Results</h2>
                <BookContainer
                    page="Search"
                    results={this.state.results}
                    addBook={this.addBook}
                />
            </div>
        );
    }
}

export default Search;