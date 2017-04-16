/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';

export default class InputItem extends Component{

    render() {
        const value = this.props.value;
        const handleChange = this.props.onChange;
        const handleKeyPress = this.props.onKeyPress;
        const focus = this.props.autoFocus;
        return (
            <input className="left" type="text"
					   placeholder="Enter item"
                       value={value} autoFocus={focus}
                       onKeyPress={handleKeyPress}
                       onChange={handleChange} />
            );
    }
}