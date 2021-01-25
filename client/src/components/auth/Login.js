import React,{useState} from 'react';
import {Form,Input,Card,Checkbox,Button,Alert} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import '../../App.css';

import {loginUser} from '../../redux/actions/auth/auth';
import {connect} from 'react-redux';

const FormItem = Form.Item;


/** Main login function */
const Login = ({loginUser}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    /** Submit function */
    const history = useHistory();
    

  return (
    <div className="container">
        <h1>Login User</h1>
        <Form className="login-form" onFinish={() => loginUser(email,password,history)}>
            {/* email input field */}
            <FormItem rules={[{required : true,message : 'Please input email address'}]}>
                <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}  />
            </FormItem>

            {/* password input field */}
            <FormItem>
                <Input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} inputMode="password"  type="password"  />
            </FormItem>
            {/* checkbox */}
            <Checkbox>Remember me</Checkbox> <br/>
            {/* submit btn */}
            <div>
                <a className="login-form-forgot" href="">Forgot password</a> ,<br/>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    Log in
                </Button> <br/>
            Or <a href="">register now!</a>
            </div>
        </Form>
        
    </div>
  )
}

/** MapDispatchToProps */
const MapDispatchToProps = {
   
        loginUser
    
}


export default connect(null,MapDispatchToProps)(Login);
