/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';
import ListItem from './listitem';

export default class ListSection extends Component{

    render() {
        const handleRemoveItem = this.props.onClickX;
        const showGroupItems = this.props.groupItems;//value function which filter All items (decide with press button)
        const listAllItems = this.props.list;
        const filteredList = listAllItems.filter(showGroupItems);
        const listItems = filteredList.map((item, index) =>
            <ListItem key={index}
                      value={item.value} id={index}
                      onClickX={handleRemoveItem} 
					  checked={item.checked}
					  onChange={this.props.onChange} />
        );
        return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
        );
    }
}