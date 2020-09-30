import React from 'react';
import DatePicker from 'react-datepicker';

const updateTodo = () => {
    return (
        <div style={{margin : 40}}>
            <div className="heading">
                <h4>Update todo</h4>
            </div>
            <br></br>
            <form className="form-group">
                <div>
                    <label>Title</label>
                    <input type="title" className="form-control" placeholder="Enter updated title"></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="description" className="form-control" placeholder="Enter updated description"></input>
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <DatePicker 
                    name="startDate"
                    dateFormat="MM/dd/yyyy" ></DatePicker>
                    
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <DatePicker 
                    name="dueDate"
                    dateFormat="MM/dd/yyyy" ></DatePicker>
                    
                </div>
                <div className="form-group">
                    <label>Update Status</label>
                    <select className="custom-select custom-select-sm mb-3">
                        <option selected value="1">In-Progress</option>
                        <option value="2">Pending</option>
                        <option value="3">Finished</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Update todo</button>
                </div>

            </form> 
        </div>
    )
}

export default updateTodo;
