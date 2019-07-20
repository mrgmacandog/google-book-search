import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <div>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </div>
            </Router>
        );
    }
}

export default App;
