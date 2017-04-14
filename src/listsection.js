/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';
import ListItem from './listitem';

export default class ListSection extends Component{

    render() {
        const handleRemoveItem = this.props.onClickX;
        console.log(handleRemoveItem);
        const stateApp = this.props.state;
        const filterBy = stateApp.groupItems;//function which filter All items (decide with press button)
        const listAllItems = stateApp.list;
        const filteredList = listAllItems.map(filterBy);
        const listItems = filteredList.map((item, index) =>
            <ListItem key={index}
                      value={item} id={index}
                      onClickX={handleRemoveItem} />
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