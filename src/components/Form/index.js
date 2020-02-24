import React, { Component } from "react"
import './index.css'
import shortid from "shortid"

class TodoForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            text: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.text !== '') {
            const todo = {
                id: shortid.generate(),
                text: this.state.text,
                complete: false
            }
            this.props.onSubmit(todo)
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input
                    className='input'
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="What needs to be done?"
                    autoFocus
                />
            </form>
        )
    }
}

export default TodoForm