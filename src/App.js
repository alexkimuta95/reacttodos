import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import React, { Component } from 'react'

export class App extends Component {
  state ={
    todos:[
      {
        id:1,
        title:'Take out the trash',
        completed:false
      },
      {
        id:2,
        title:'Walk with fiancee',
        completed:false
      },
      {
        id:3,
        title:'Visit the doctor',
        completed:true
      }
    ]
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
  this.setState( { todos: [...this.state.todos.filter(todo=> todo.id !==id)] } );
}

  render() {
    console.log(this.state.todos)
    return (
      <div>
       <Header/>
        <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo ={this.delTodo} />
      </div>
    )
  }
}

export default App

