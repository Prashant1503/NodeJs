import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Headers extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">CRUD APP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/all">
                                    All Posts <span className="sr-only">(current)</span>
                                </a>
                            </li>
                           
                          
                        </ul>
                        
                    </div>
                </nav>
            </div>
        )
    }
}
