import React, { Component } from "react";
import BookContainer from "../components/BookContainer";
import axios from "axios";

class Saved extends Component {
    state = {
        results: []
    }

    // When the component is mounted, load the books
    componentDidMount() {
        this.loadBooks();
    }

    deleteBook = id => {
        axios.delete(`/api/books/${id}`)
            // Wait 300 ms before loading the books
            .then(response => setTimeout(this.loadBooks, 300))
            .catch(err => console.log(err));
    }
    
    loadBooks = () => {
        axios.get("/api/books")
            .then(results => this.setState({ results: results.data }))
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