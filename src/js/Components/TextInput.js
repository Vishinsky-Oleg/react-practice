import React, { Component } from 'react'

export default class TextInput extends Component {
    render() {
        return (
            <label>
                Name:
                <input type="text" name="textInput" value={this.props.value} onChange={this.props.handleChange} />
            </label>
        );
    }
}
