import React from "react";
import './TodoItems.css'
function TodoItems({todos,deleteHandler}){
      return(
            <div className="todoItems">
                  {
                        todos.length?todos.map(todo=>{
                              return <span className="todoItem" key={todo.id}>{todo.title}
                              <button onClick={()=>deleteHandler(todo.id)}>X</button>
                              </span>
                              
                        }):<h2>There is no todo list!</h2>
                  }
            </div>
      );
}
export default TodoItems;