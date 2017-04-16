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
						
						
function createStore(){
	if (typeof(Storage) !== "undefined") {
		if (localStorage.listItems) {
			console.log("Local Storage? It's possible.");
			return JSON.parse(localStorage.listItems);
		} else {
			const initState = {
			value: '', 
			list:[], 
			groupItems: 'all' };
			localStorage.setItem("listItems", JSON.stringify(initState));
			return initState;
		}		
    } else {
            console.log("Sorry! No Web Storage support..");
        }
}

class App extends Component {

    constructor(props) {
        super(props);
		//localStorage.clear();
        this.state = createStore();
		
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleCheckItem = this.handleCheckItem.bind(this);
		this.showAmountCheckedItems = this.showAmountCheckedItems.bind(this);
		this.handleClickFilterButton = this.handleClickFilterButton.bind(this);
	}
	
	componentDidMount(){
		localStorage.setItem("listItems", JSON.stringify(this.state));
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
		this.setState({groupItems: whatButton});
	}

   render() {
	 localStorage.setItem("listItems", JSON.stringify(this.state));
     return (
      <div className="App">
        <div className="App-header">
          <InputSection value={this.state.value}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange}
                        autoFocus={true}
                        onClick={this.handleAddItem}/>
        </div>
        <div className="App-intro">
          <ListSection list={this.state.list}
				groupItems={filterButtons[this.state.groupItems]}
		       onClickX={this.handleRemoveItem} 
			   onChange={this.handleCheckItem} />
        </div>
        <div className="App-footer">
          <OutputDataSection groupItems={this.state.groupItems}
		  amountChecked={this.showAmountCheckedItems()} 
		  onClick={this.handleClickFilterButton} />
        </div>
      </div>
    );
  }
}

export default App;
