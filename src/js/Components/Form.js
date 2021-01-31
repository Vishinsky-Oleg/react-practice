import React, { Component } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import Para from './Para'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            textInput: "",
            textArea: "",
            select: "cocunut",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        console.log(this.state.textInput);
        console.log(this.state.textArea);
        console.log(this.state.select);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput value={this.state.textInput} handleChange={this.handleChange} />
                <TextArea value={this.state.textArea} handleChange={this.handleChange} />
                <Select value={this.state.select} handleChange={this.handleChange} />
                <input type="file" />
                <button>Submit</button>
            </form>
        );
    }
}
