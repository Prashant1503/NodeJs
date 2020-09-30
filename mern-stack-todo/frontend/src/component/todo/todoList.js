import { Link } from 'react-router-dom';
import React from 'react'

const todoList = () => {
    return (
        <div style={{margin : 20}}>
             <br></br>
             <table className="table shadow">
            <thead className="bg-secondary text-white">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th>Actions</th>
            
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Learned react Js</td>
                <td>Completed mern stack project</td>
                <td>In-Progress</td>
                <td className="actions">
                    <Link to="/todo/delete/:id" >
                        <span className="material-icons text-danger">remove</span>
                    </Link>
                    <Link to="/todo/update/:id">
                        <span className="material-icons text-danger">edit</span>
                    </Link>
                </td>
                </tr>
                
               
            </tbody>
        </table>
        </div>
       
    )
}

export default todoList;
