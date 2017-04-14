import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InputSection from './inputsection';
import ListSection from './listsection';
import OutputDataSection from './outputdatadection';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', list:[], groupItems: x => x };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleAddItem() {
        this.setState(prevState => {
            const list = prevState.list;
            const item = this.state.value;
            if (item.trim() !== '') {
                list.push(item);
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
        console.log(this.state.list);
        console.log("Execute handleRemoveItem");
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
          <ListSection state={this.state} onClickX={this.handleRemoveItem}/>
        </div>
        <div className="App-footer">
          <OutputDataSection />
        </div>
      </div>
    );
  }
}

export default App;
