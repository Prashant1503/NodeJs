import React from 'react';
import './styles/App.scss';
import {Router,BrowserRouter,Switch,Route} from 'react-router-dom';
import todoList from './component/todo/todoList';
import addTodo from './component/todo/addTodo';
import updateTodo from './component/todo/updateTodo';
import NavBar from './component/elements/NavBar';
import './actions/index';


function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Switch>
          <Route exact path="/" component={todoList} ></Route>
          <Route exact path="/todo/add" component={addTodo}></Route>
          <Route exact path="/todo/update/:id" component={updateTodo}></Route>
          <Route exact path="/todo/delete/:id"></Route>
        
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
