import React from 'react'

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.completedStyle={
            fontStyle: "italic",
            color: "#d35dof",
            opacity: 0.4,
            textDecoration: 'line-through'
        };
        this.completed = this.props.todo.completed;
        this.title = this.props.todo.title;
        this.id = this.props.todo.id;
    }


    componentWillUnmount(){
        alert('Item about to be deleted');
    
    }


    render(){
        return (<li className="todo-item">
        <input type="checkbox" checked={this.completed} onChange={()=>this.props.handleChangeProps(this.id)} />
        <button onClick={()=>this.props.deleteTodoProps(this.id)}>Delete</button>
            <span style={this.completed ? this.completedStyle: null}>
        {this.title}</span></li>)
    }
    
}


export default TodoItem; 