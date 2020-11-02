import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            {this.props.todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps}/>
            ))}
        </div>
        )
    }
}

export default TodoList;