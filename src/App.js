import React,{useRef}  from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';
import './App.css';

function App({addTodo, todos}) {



  const todoEl = useRef('');
  const manageClick = (e)=>{
    e.preventDefault();
    addTodo(todoEl.current.value)
  }

  

 

  return (
    <div className="App container-fluid">
      <div className='row d-flex justify-content-center text-center'>
        <div className="class col-md-6">
          <h1>My todolist app</h1>

            <form action="">
              <div className="class form-group">
                <input ref={todoEl} type="text" name='todo' id='todo' className="class form-field" />
                <button onClick={manageClick} className='btn btn-success m-1'>ADD</button>
              </div>
            </form>

            <ul className='list-group list-group-flush'>
              {
                todos.map(todo => <li key={todo.name} className='list-group-item'>{todo.name}</li>)
              }
            </ul>
        </div>
      </div>
    </div>
  );
}
const matchStateToProps=(state)=>{
 return {todos: [...state]}
};
const mapDispatchToProps=(dispatch)=>{
  return {
    addTodo:(name)=> dispatch(addTodo(name))
  }
};
const createConnector = connect(matchStateToProps,mapDispatchToProps);  
export default createConnector(App);
