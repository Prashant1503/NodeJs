import React from 'react';
import '../../App.css';

// registeration form functionn
function loginForm (){
  return (
    <form>
   
        {/* email input field */}
        <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
        </div>

  
        {/* password input field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

       
        {/* submit btn */}
        <button type="button" class="btn btn-primary">Register</button>
    </form>
  )
}

const Login = () => {
  return (
    <div>
      <h1>Login to dashboard</h1>
    <div>
      <br/>
      {loginForm()}
    </div>
    </div>
  )
}

export default Login;
