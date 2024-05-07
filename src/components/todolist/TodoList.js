import React, { useState } from 'react';
import styles from './TodoList.module.css';
import TodoItems from '../TodoItems/TodoItems';
function TodoList(){
      const [todos,setTodos]=useState('');
      const [title,setTitle]=useState([]);
      const addTodo =(e)=>{
            e.preventDefault();
            setTodos([...todos,{id:todos.length,title:title}])
            setTitle("")
      }
      const deleteHandler=(id)=>{
            let filtered=todos.filter(todo=>{
                  return todo.id!=id;
            })
            setTodos(filtered);
      }
      return(
            <div className={styles.todo}>
                  <h2 className={styles.todoHeader}>Todo List</h2>
                  <form className={styles.todoForm} onSubmit={addTodo}>
                        <input type='text' className={styles.todoFormInput} value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <button className={styles.todoFormSubmit}>Add</button>
                  </form>
                  <TodoItems todos={todos} deleteHandler={deleteHandler}></TodoItems>
            </div>
      );
}
export default TodoList;