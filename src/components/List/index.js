import React, { Component } from "react";
import TodoForm from "../Form";
import Todo from "../Item";
import './index.css'

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className='list'>
        <TodoForm onSubmit={this.addTodo} />
        <div className='body'>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        </div>
        <div className="foot">
          <div>
            Item left: {this.state.todos.filter(todo => !todo.complete).length}
          </div>
          <div>
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>active</button>
            <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
          </div>
          <div>
            {this.state.todos.some(todo => todo.complete) && (
                <button onClick={this.removeAllTodosThatAreComplete}>remove all complete todos</button>
            )}
            <div>
                <button
                onClick={() =>
                    this.setState(state => ({
                    todos: state.todos.map(todo => ({
                        ...todo,
                        complete: state.toggleAllComplete
                    })),
                    toggleAllComplete: !state.toggleAllComplete
                    }))
                }
                >
                toggle all complete: {`${this.state.toggleAllComplete}`}
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}