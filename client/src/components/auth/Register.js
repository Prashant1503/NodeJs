import React,{useState}from 'react';
import {Form,Input,Card,Checkbox,Button,Select,Space,DatePicker} from 'antd';
import {} from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import '../../App.css';
import {registerUser} from '../../redux/actions/auth/auth';
import {connect} from 'react-redux';

const FormItem = Form.Item;
const Option = Select.Option;


const Register = () => {

    /** hook for multiple fields */
    const [username,setUsername] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [role,setrole] = useState('');
    const [dateOfBirth,setdateOfBirth] = useState('');
    const [contact,setcontact] = useState('');

    /** onSubmit function */
    const onSubmit = (registerUser) => {

        
        registerUser(username,email,password,role,dateOfBirth,contact);
    }

  return (
    <div className="container">
        <h1>Register User</h1>
        
        <Form className="login-form" onFinish={onSubmit} >
            {/* username input field */}
            <FormItem>
                <Input
                 placeholder="Username" 
                 value={username}
                 onChange={e => setUsername(e.target.value)}
                 type="text"
                
                  />
            </FormItem>

            {/* email input field */}
            <FormItem>
                <Input
                 placeholder="Email"
                  
                  type="email"
                  name="email"
                  value={email}
                 onChange={e => setemail(e.target.value)}  />
            </FormItem>


            {/* password input field */}
            <FormItem>
                <Input 
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                 onChange={e => setpassword(e.target.value)}
                  />
            </FormItem>

             {/* contact number input field */}
             <FormItem>
                <Input 
                placeholder="Enter contact number"
                type="numer"
                name="numer"
                value={contact}
                 onChange={e => setcontact(e.target.value)}
                  />
            </FormItem>

            {/* role dropdown field */}
           
            <Select size="large" 
                placeholder="Select role"
                 style={{width : '75rem'}} 
                 onChange={setrole}
                  inputValue={role}
                 
                   >

                    <Option value="admin">Admin</Option>
                    <Option value="project-manager">Project-manager</Option>
                    <Option value="account-manager">Account-Manager</Option>
            </Select>
            <br/>
        
            <br/>
            {/* date of birth field */}
            <Space direction="vertical" style={{width : '100rem'}} size="large" >
                <DatePicker picker="date"  
                name="date"
                value={dateOfBirth}
                 onChange={e => setdateOfBirth(e.target.value)} ></DatePicker>
                <br/>
            </Space>
         
        
            <div>
              
                <Button 
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{margin: 10}} 
                    type="submit"
                    onSubmit={onSubmit}>
                    Register user
                </Button> <br/>
            Or <a href="/login" style={{margin : 10}}>
            
            Already have an account?Sign in</a>
            </div>
        </Form>
    </div>
  )
}


/** MapDispatch toProps */
const MapDispatchToProps =() => {
    return {
        registerUser
    }
}

export default connect(null,MapDispatchToProps) (Register);
