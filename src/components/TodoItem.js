import React from 'react'

function TodoItem (props){

    const completedStyle={
        fontStyle: "italic",
        color: "#d35dof",
        opacity: 0.4,
        textDecoration: 'line-through'
    }

    const {completed, title, id} = props.todo;

    return <li className="todo-item">
        <input type="checkbox" checked={completed} onChange={()=>props.handleChangeProps(id)} />
        <button onClick={()=>props.deleteTodoProps(id)}>Delete</button>
            <span style={completed ? completedStyle: null}>
        {title}</span></li>
}


export default TodoItem; 