import Form from './components/Form';
import './App.css';
import React, { useState } from 'react';
import Display from './components/Display';

function App() {
  const [content, setContent] = useState([])
  const addContent = (task) => {
    var newArr = [...content]
    var isIn = false
    for (var i = 0; i <newArr.length; i++){
      if (newArr[i] === task){
        isIn = true
      }
    }
    if (isIn === true){
      alert("Tasks must be unique")
    } else{
      newArr = [...content, task]
      setContent(newArr)
    }
  }
  const deleteContent = (task) => {
    console.log(task)
    const newArr = [...content].filter(tasks => task !== tasks)
    setContent(newArr)
  }

  console.log({content})
  return (
    <div className="App">
      <Form setContent = {addContent}/>
      <Display content = {content} deleteContent = {deleteContent}/>
    </div>
  );
}

export default App;
