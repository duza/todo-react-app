/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';

export default class OutputDataSection extends Component{
    render() {
		const amount = this.props.amountChecked;
		var result = `${amount > 0 ? amount : 'Not' } checked item${amount === 1 ? '' : 's'}`;
		const handleClick = this.props.onClick;
        return (
        <div>
			<div>{result}</div>
			<button onClick={handleClick} value="all">All</button>
			<button onClick={handleClick} value="active">Active</button>
			<button onClick={handleClick} value="complited">Complited</button>
		</div>
        );
    }
}