import React,{useRef} from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,reset,addUser,removeUser} from './actions';




const App =() => {

  const count = useSelector(state => state.counterReducer);
  const users = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const userRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addUser(userRef.current.value));
  }


  return (
    <div className="App">
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
       {count}
       <button onClick={() => dispatch(decrement())}>-</button>
       <h2>User</h2>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter username" ref={userRef}></input>
       </form>
       <ul>
         {
          users.map((user,index) => (
            <div>
            <li key={index}>{user.name}</li>
            <button onClick={() => dispatch(removeUser(index))}>&times;</button>
            </div>
           
          ))
         }
       </ul>
    </div>
  );
}

export default App;
