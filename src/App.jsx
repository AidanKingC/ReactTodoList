// Desc: Main app component
// src/App.js
import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header className="Header"/>
        <TodoList/>
    </div>
  );
}

export default App;
