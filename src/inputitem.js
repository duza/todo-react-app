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
        console.log(value, handleChange, this.props.onKeyPress);
        return (
            <div>
                <input type="text" className=""
                       value={value} autoFocus={focus}
                       onKeyPress={handleKeyPress}
                       onChange={handleChange} />
            </div>
        );
    }
}