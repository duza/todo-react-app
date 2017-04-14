/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';

export default class ListItem extends Component{
    constructor(props){
        super(props);

        this.handleOnClickX = this.handleOnClickX.bind(this);
    }
    handleOnClickX() {
        const index = this.props.id;
        console.log(index);
        console.log(this.props.id);
        this.props.onClickX(index);
    }

    render() {
        return (
            <li id={this.props.id}>
                <label>
                    <input type="checkbox" />
                        {this.props.value}
                </label>
                <span onClick={this.handleOnClickX}>
                    {'\u00D7'}
                </span>
            </li>

        );
    }
}