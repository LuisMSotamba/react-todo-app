import React from 'react';
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';



class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                // {
                //     id: uuidv4(),
                //     title: "Setup development enviroment",
                //     completed : true
                // },
                // {
                //     id: uuidv4(),
                //     title: 'Develop website and add component',
                //     completed: false,
                // },
                // {
                //     id: uuidv4(), 
                //     title: 'Deploy to live server',
                //     completed: false,
                // }
            ],
            show: false
        }
    }


    handleChange = id=>{
        console.log('clicked ', id);
        this.setState({
            todos : this.state.todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show: !this.state.show
        })
    }

    delTodo = id=>{
        console.log('clicked ',id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response=>this.setState({
            todos: this.state.todos.filter(todo=>{
                return todo.id !== id
            })
        }))
        
    }

    addTodoItem = title=>{
        // console.log(title)
        // const newTodo = {
        //     id: uuidv4(),
        //     title,
        //     completed: false
        // };
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,
            completed: false
        }).then(response=>this.setState({
            todos:[...this.state.todos, response.data]
        }))
        
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=50")
        .then(response=>this.setState({todos: response.data}))
        .catch(error=>console.log(error));
    }

    render(){
        
        return (
            //Alternative to React.Fragment
            //<> ... </>
           <div className="container" >
               <Header headerSpan={this.state.show} />
               <InputTodo addTodoProps = {this.addTodoItem} />
               <TodoList todos={this.state.todos} handleChangeProps = {this.handleChange} deleteTodoProps={this.delTodo}/>
           </div>
                
        
        )
    }
}

export default TodoContainer;