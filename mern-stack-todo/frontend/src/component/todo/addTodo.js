import React,{ useState} from 'react';
import '../../styles/index.scss';
import DatePicker from 'react-datepicker';

 const  AddTodo = () =>{

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [strDate,setDate] = useState('');
    const [dueDate,setDueDate] = useState('');
    const [status,setStatus] = useState('');


    const submit = (e) => {
        e.preventDefault();

        console.log(title,description);


    }
    

    return (
        <div style={{margin : 40}}>
            <div className="heading">
                <h4>Create Custom Todo</h4>
            </div>
            <br></br>
            <form className="form-group" onSubmit={(e) => submit(e.target.value)}>
                <div>
                    <label>Title</label>
                    <input
                     type="text"
                      className="form-control"
                       placeholder="Enter title"
                       name="title"
                       value={title}
                       onChange={(e) => setTitle(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                       type="text"
                      placeholder="Enter description"
                      value={description}
                      name="description"
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <DatePicker 
                    name="startDate"
                    dateFormat="MM/dd/yyyy"
                    value={strDate}
                    selected={setDate}
                    onChange={(e) => setDate(e.target.value)} ></DatePicker>
                    
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <DatePicker 
                    name="dueDate"
                    value={dueDate}
                    selected={setDueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    dateFormat="MM/dd/yyyy" ></DatePicker>
                    
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select className="custom-select custom-select-sm mb-3" 
                         
                        >
                        <option selected value="1">In-Progress</option>
                        <option value="2">Pending</option>
                        <option value="3">Finished</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onSubmit={submit}>Submit todo</button>
                </div>

            </form> 
        </div>
    )
}

export default AddTodo;
