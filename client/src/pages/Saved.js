import React, { Component } from "react";
import BookContainer from "../components/BookContainer";
import axios from "axios";

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
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
                />
            </div>
        );
    }
}

export default Saved;