import { createStore } from 'redux';

const initTodos =[
    {
      name:'Call mum',
      dueDate:new Date().toLocaleDateString(),
      user_id:1
    },
    {
      name:'Call dad',
      dueDate:new Date().toLocaleDateString(),
      user_id:1
    },
    {
      name:'Call sister',
      dueDate:new Date().toLocaleDateString(),
      user_id:1
    }
  ];

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
    
    return [action.payload, ...state];
        default:
            return state;
    }   
}

export const store = createStore(reducer, initTodos, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
