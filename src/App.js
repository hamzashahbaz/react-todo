import React, { Component } from 'react'
import TodoList from './components/List'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="title">Todos</h1>
        <div className='content'>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
