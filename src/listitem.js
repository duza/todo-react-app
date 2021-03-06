/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';

export default class ListItem extends Component{
    constructor(props){
        super(props);

        this.handleOnClickX = this.handleOnClickX.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}
    handleOnClickX() {
        const index = this.props.id;
        this.props.onClickX(index);
    }
	handleOnChange(){
		const index = this.props.id;
		this.props.onChange(index);
	}

    render() {
        return (
            <li id={this.props.id}>
                <label className={ this.props.checked ? "checked" : "unchecked"}>
                    <input type="checkbox"  
					checked={this.props.checked} 
					onChange={this.handleOnChange} 
					/>
                        {this.props.value}
                </label>
                <span onClick={this.handleOnClickX} className="close">
                    {'\u00D7'}
                </span>
            </li>

        );
    }
}