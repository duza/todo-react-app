/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';
import ListItem from './listitem';

export default class ListSection extends Component{

    render() {
        const handleRemoveItem = this.props.onClickX;
        const stateApp = this.props.state;
        const showGroupItems = stateApp.groupItems;//function which filter All items (decide with press button)
        const listAllItems = stateApp.list;
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