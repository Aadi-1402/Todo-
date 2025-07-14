import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./todo.css";

export default function Todo() {
    let [todos , setTodos] = useState([{task: "Sample ", id: uuidv4() }]);
    let [newTodo ,setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos , {task: newTodo , id : uuidv4()} ]);
        setNewTodo("");

    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo =(id) =>{
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id) 
          );
    };

    return (
        <div className="todo">
            <input placeholder = " Add a task " value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
         
            <br></br>
            <br></br>
             
             <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>{
                todos.map((todo)=>{
                  return (
                  <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp; 
                    <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                  </li>
                  )
                })
            }
            </ul>
        </div>
    );
}