/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';
import InputItem from './inputitem';
import AddButton from './addbutton';

export default class InputSection extends Component{

    render() {
        return (
            <div className="flex-container">
                <InputItem value={this.props.value}
                           onKeyPress={this.props.onKeyPress}
                           onChange={this.props.onChange}
                           autoFocus={this.props.autoFocus} />

                <AddButton onClick={this.props.onClick} />
            </div>
        );
    }
}