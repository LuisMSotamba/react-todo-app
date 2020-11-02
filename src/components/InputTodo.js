import React, {Component} from 'react';

class InputTodo extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    
    onChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title:''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className='form-container' >
                <input className="input-text" name="title" type="text" placeholder="Add todo..." value={this.state.title} onChange={this.onChange}></input>
                <input className="input-submit" type="submit" value="submit"></input>
            </form>
        )
    }
}

export default InputTodo;