/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';

export default class AddButton extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick();
    }

    render() {
        return (
               <button className="right" 
				onClick={this.handleClick} 
				type="submit">
                    Add
                </button>
           );
    }
}