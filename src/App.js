
import './App.css';
import Header from './Componants/Header.js'
import { Footer } from './Componants/Footer.js'
import { TodoItem } from './Componants/TodoItem.js'
import { Todos } from './Componants/Todos.js'
import React, { useState } from 'react';
import { AddTodo } from './Componants/AddTodo.js'


function App() {
  const onDelete = (todo) => {
    console.log("Deleted...", todo)
    //Deleting in react this way will not work
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)
    setTodos(todos.filter((event) => {
      return event !== todo
    }))
  }

  const addTodo = (task, desc) => {
    console.log(task, desc)
    // let sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      // sno: sno,
      task: task,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="My ToDos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>


  );
}

export default App;



