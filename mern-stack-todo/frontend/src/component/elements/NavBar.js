import React from 'react';
import '../../styles/App.scss';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
       <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
           <div className="container">
               <Link to="/" className="navbar-brand">Home</Link>
           </div>
           <div className="container">
               <Link to="/todo/add" className="navbar-brand">Add Todo</Link>
           </div>
            <div className="border 1px solid padding 10px">
                <input placeholder="Search todo"></input>
            </div>
       </nav>
    )
}

export default NavBar;
