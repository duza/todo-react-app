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
        <div className="flex-container">
			<div className="Btn">
				{this.props.groupItems === 'all' ? result : null }
			</div>
			<div>
				<button onClick={handleClick} 
				value="all" className="Btn">
					All
				</button>
			</div>
			<div>
				<button onClick={handleClick}
				value="active" className="Btn">
				Active
				</button>
			</div>
			<div>
				<button onClick={handleClick} 
				value="complited" className="Btn">
				Complited
				</button>
			</div>
		</div>
        );
    }
}