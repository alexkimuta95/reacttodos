import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import React, { Component, Fragment } from 'react'
import Axios from 'axios';

export class App extends Component {
  state ={
    todos:[]
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }
markComplete = (id) =>{
  this.setState( { todos:this.state.todos.map(todo =>{
    if(todo.id ===id){
      todo.completed = !todo.completed
    }
    return todo;
  }) } )
}
delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState( { todos: [...this.state.todos.filter(todo=> todo.id !==id)] } ))
  
}
AddTodo = (title)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed:false
  })
  .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  
}

  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
        <div className="container">
       <Header/>
       <Route exact path="/" render={props => (
         <Fragment>
            <AddTodo AddTodo={this.AddTodo}/>
        <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo ={this.delTodo} />
         </Fragment>
       )} />
       <Route path="/about" component={About} />
      </div>
        </div>
      </Router>
    )
  }
}

export default App

