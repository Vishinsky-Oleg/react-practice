import React, { Component } from "react";

export default class TextArea extends Component {
    render() {
        return (
            <label>
                Textarea:
                <textarea type="text" name="textArea" value={this.props.value} onChange={this.props.handleChange} />
            </label>
        );
    }
}
