import React from 'react';
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo';
import {v4 as uuidv4} from 'uuid';



class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    id: uuidv4(),
                    title: "Setup development enviroment",
                    completed : true
                },
                {
                    id: uuidv4(),
                    title: 'Develop website and add component',
                    completed: false,
                },
                {
                    id: uuidv4(), 
                    title: 'Deploy to live server',
                    completed: false,
                }
            ]
        }
    }


    handleChange = id=>{
        console.log('clicked ', id);
        this.setState({
            todos : this.state.todos.map(todo=>{
                console.log(todo.id)
                if(todo.id === id){
                    console.log('entre')
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    delTodo = id=>{
        console.log('clicked ',id);
        this.setState({
            todos: this.state.todos.filter(todo=>{
                return todo.id !== id
            })
        })
    }

    addTodoItem = title=>{
        console.log(title)
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }

    render(){
        
        return (
            //Alternative to React.Fragment
            //<> ... </>
           <div className="container" >
               <Header/>
               <InputTodo addTodoProps = {this.addTodoItem} />
               <TodoList todos={this.state.todos} handleChangeProps = {this.handleChange} deleteTodoProps={this.delTodo}/>
           </div>
                
        
        )
    }
}

export default TodoContainer;