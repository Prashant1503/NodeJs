import React from 'react';
import '../../App.css';
import {connect} from 'react-redux';

// registeration form functionn
function registerationForm (){
  return (
    <form>
    {/* username input field */}
        <div className="mb-3">
        <label className="form-label">User Name</label>
        <input type="text" className="form-control" />
        </div>

        {/* email input field */}
        <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
        </div>

        {/* role select input dropdown */}
        <div class="mb-3">
          <label for="disabledSelect" class="form-label">select Role</label>
          <select id="disabledSelect" class="form-select">
            <option>Admin</option>
            <option>Project_manager</option>
            <option>Account_manager</option>
          </select>
        </div>

        {/* password input field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        {/* date of birth field */}
        <div className="mb-3">
          <label className="form-label">D.O.B</label>
          <input type="date" className="form-control"></input>
        </div>

         {/* contact number input field */}
         <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input type="tel" name="phone" className="form-control" placeholder="Provide phone number"></input>
        </div>

        {/* submit btn */}
        <button type="button" class="btn btn-primary">Register</button>
    </form>
  )
}

const Register = () => {
  return (
    <div>
      <h1>Registeration Form</h1>
    <div>
      <br/>
      {registerationForm()}
    </div>
    </div>
  )
}

// dispatch action
const mapDispatchToProps = dispatch => {
  return {
    register: () => dispatch({type : 'REGISTER_USER'})
  }
}

export default connect(mapDispatchToProps)(Register);

