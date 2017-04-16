import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InputSection from './inputsection';
import ListSection from './listsection';
import OutputDataSection from './outputdatadection';

function showAllItems(item){
    return true;
}

function isActiveItem(item){
    if (item.checked === false){
		return true;
	}
	return false;
}

function isComplitedItem(item){
    if (item.checked === true){
		return true;
	}
	return false;
}

const filterButtons = {'all': showAllItems, 
						'active': isActiveItem, 
						'complited': isComplitedItem};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', list:[], groupItems: showAllItems };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleCheckItem = this.handleCheckItem.bind(this);
		this.showAmountCheckedItems = this.showAmountCheckedItems.bind(this);
		this.handleClickFilterButton = this.handleClickFilterButton.bind(this);
	}

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleAddItem() {
        this.setState(prevState => {
            const list = prevState.list;
            const item = this.state.value;
            if (item.trim() !== '') {
                list.push({value: item, checked: false});
            }
            return {value:'',list};
        });
        console.log(this.state.list);
    }

    handleKeyPress(event){
        if (event.which === 13 ) {
            event.preventDefault();
            this.handleAddItem();
        }
    }

    handleRemoveItem(index){
        this.setState(prevState => {
            const list = prevState.list;
            if (index > -1){
                list.splice(index, 1);
            }
            return {list};
        });
        //console.log(this.state.list);
        //console.log("Execute handleRemoveItem");
    }
	
	handleCheckItem(index){
		console.log(this.state.list);
	    this.setState(prevState => {
		    const list = prevState.list;
			const checkedItem = list[index].checked;
			list[index].checked = !checkedItem;
			return {list};
			});
		}
	
	showAmountCheckedItems(){
		const list = this.state.list;
		const filteredList = list.filter(isComplitedItem);
		return filteredList.length;
		}
	
	handleClickFilterButton(event){
		const whatButton = event.target.value;
		this.setState({groupItems: filterButtons[whatButton]});
	}

   render() {
     return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React ToDo</h2>
          <InputSection value={this.state.value}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                        autoFocus={true}
                        onClick={this.handleAddItem}/>
        </div>
        <div className="App-intro">
          <ListSection state={this.state} 
		       onClickX={this.handleRemoveItem} 
			   onChange={this.handleCheckItem} />
        </div>
        <div className="App-footer">
          <OutputDataSection amountChecked={this.showAmountCheckedItems()} onClick={this.handleClickFilterButton} />
        </div>
      </div>
    );
  }
}

export default App;
