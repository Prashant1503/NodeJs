import React, { Component } from 'react'
import {BrowserRouter,Route,} from 'react-router-dom';

import LandingPage from './component/LandingPage';
import DetailPost from './component/DetailPost';
import CreatePost from './component/CreatePost';
import EditPost from './component/EditPost';
import Headers from './component/Headers';
import DeletePost from './component/DeletePost';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Headers />
          <Route path="/all" exact component={LandingPage}></Route>
          <Route path="/detail/:id" component={DetailPost}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/delete/:id" component={DeletePost}></Route>

        </div>
      </BrowserRouter>
    )
  }
}
