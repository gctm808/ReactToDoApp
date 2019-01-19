import React, { Component } from 'react';
import './App.css';
import ListItems from './components/listItems.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      newItem: ''
    }

    this.addItem = this.addItem.bind(this)
  } 

  addItem(e) {
    if(this.inputElement !== ''){
      let newItem = {
        text: this.inputElement.value,
        key: Date.now()
      }

      this.setState((prevState) => {
        return {
          list: prevState.list.concat(newItem)
        }
      })

      this.inputElement.value = ''
      
    }

    console.log(this.state.list)
    e.preventDefault()
  }
  
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.addItem}>
          <input ref={(a) => this.inputElement = a} />
          <button type='submit'>Click to add new item</button>
        </form>
        <ListItems items={this.state.list} />
      </div>
    );
  }
}

export default App;
