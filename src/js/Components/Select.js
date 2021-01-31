import React, { Component } from "react";

export default class Select extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll("select");
        var instances = M.FormSelect.init(elems, "drop");
    }
    render() {
        return (
            <label className="input-field">
                Pick your favorite flavor:
                <select value={this.props.value} onChange={this.props.handleChange} name="select">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
        );
    }
}
