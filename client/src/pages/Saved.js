import React, { Component } from "react";
import BookContainer from "../components/BookContainer";
import axios from "axios";

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    deleteBook = id => {
        axios.delete(`/api/books/${id}`)
            .then(response => this.loadBooks())
            .catch(err => console.log(err));
    }
    
    loadBooks = () => {
        axios.get("/api/books")
            .then(results => {
                // TODO: Delete this console.log
                console.log(results);
                this.setState({ results: results.data });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Books</h2>
                <BookContainer
                    page="Saved"
                    results={this.state.results}
                    deleteBook={this.deleteBook}
                />
            </div>
        );
    }
}

export default Saved;