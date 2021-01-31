import React, { Component } from "react";
import MiniP from "./MiniPara";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            num: 5,
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((oldState, props) => {
            // console.log(props)
            return { num: oldState.num + props.incrementer };
        });
    }
    render() {
        
        return (
            <header>
                <p>
                    This {this.props.age}is header {this.props.name}
                </p>
                <h1>This is headers {this.props.age}</h1>
                <button onClick={this.increment}>Increase</button>
                <MiniP number={this.props.number} />
            </header>
        );
    }
}

export default Header;
