import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Sully",
            age: 15,
            isLoaded: false,
            char: {},
            number: 1,
        };
        this.increase = this.increase.bind(this);
        this.spiralNumber = this.spiralNumber.bind(this);
    }
    spiralNumber() {
        this.setState((oldS) => {
            return {
                number: oldS.number + 1,
            };
        });
    }

    increase() {
        this.setState((oldState) => {
            return { age: oldState.age + 1 };
        });
        console.log("Increase");
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((array) =>
                this.setState({
                    char: array,
                })
            );
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 3000);
    }
    render() {
        let mains = Array.from(this.state.char).map((obj) => (
            <Main key={obj.id} isLoaded={this.state.isLoaded} name={obj.name} email={obj.email} body={obj.body} />
        ));
        return (
            <div>
                <Header {...this.state} incrementer={2} number={this.state.number} />
                <button onClick={this.spiralNumber}>Increase weterfall</button>
                {mains}
                <p>Hello World</p>
                <span>This is span</span>
                <button onClick={this.increase}>Button</button>
            </div>
        );
    }
}

export default App;
