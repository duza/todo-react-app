/**
 * Created by everbudding on 14.4.17.
 */
import React, { Component } from 'react';
import InputItem from './inputitem';
import AddButton from './addbutton';

export default class InputSection extends Component{
/*
    constructor(props) {
        super(props);
        this.state = {value: '', list:[]};

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleAddItem() {
        alert('A name was submitted: ' + this.state.value);

        this.setState(prevState => {
            const list = prevState.list;
            const item = this.state.value;
            if (item.trim() !== '') {
                list.push(item);
            }
            return {value:'',list};
        });
        console.log(this.state.list);
        console.log("Execute handleAddItem");
    }

    handleKeyPress(event){
        console.log("In da key press" + event.which);
        if (event.which === 13 ) {
            event.preventDefault();
            this.handleAddItem();
            console.log("We catched Enter!!");
        }
    }*/

    render() {
        return (
            <div>
                <InputItem value={this.props.value}
                           onKeyPress={this.props.onKeyPress}
                           onChange={this.props.onChange}
                           autoFocus={this.props.autoFocus} />

                <AddButton onClick={this.props.onClick} />
            </div>
        );
    }
}