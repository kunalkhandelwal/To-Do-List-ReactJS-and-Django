import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch tasks from the API when the component is mounted
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/')
      .then(response => {
        setTodos(response.data); // Assuming response.data is an array of todos
      })
      .catch(error => {
        console.error('There was an error fetching the todos!', error);
      });
  }, []);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);

    const myTodo = {
      title: title,
      desc: desc,
      completed: false
    };

    // Send a POST request to add the new todo
    axios.post('http://127.0.0.1:8000/api/todos/', myTodo)
      .then(response => {
        setTodos([...todos, response.data]); // Assuming the API returns the created todo
      })
      .catch(error => {
        console.error('There was an error adding the todo!', error);
      });
  }

  return (
    <>
      <Header title="To Do List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;