import React, { Component } from "react";

class Main extends Component {
    componentDidMount() {
        console.log('Mounted')
    }
    componentDidUpdate() {
        console.log('Updated')
    }
    render() {
        console.log("Rendered");
        return (
            <main>
                <h5>Main headers {!this.props.isLoaded ? "Loading" : "Loaded"}</h5>
                <p> {this.props.name}</p>
                <p> {this.props.email}</p>
                <p> {this.props.body}</p>
            </main>
        );
    }
}

export default Main;
