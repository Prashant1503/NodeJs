import React from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


const Register = () => {

    // form
    const registerForm = () => {

        return (
            <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}>

            {/* username input */}
            <Form.Item
                label="Username"
                name="Username"
                rules={[{required : true,
                message : 'Please enter username'}]}>

                <Input
                   placeholder="Enter username" 
                   />

            </Form.Item>

            {/* email input field */}
            <Form.Item
                label="Email"
                name="Email"
                rules={[{required : true,
                message : 'Please enter email'}]}>

                <Input
                   placeholder="Enter email" 
                   />

            </Form.Item>

            {/* password input field */}
                
                <Form.Item
                    label="password"
                    name="password"
                    rules={[{required : true,
                    message : 'Please enter password'}]}>

                    <Input
                    placeholder="Enter password" 
                    />
                  </Form.Item>

                  {/* role select field */}
                  <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                     </Form.Item>
            </Form>

          
          
        
        )
    }
    return (
        <div className="App">
            <div>
                <h1>Registeration Form</h1>
                {registerForm()}
            </div>
        </div>
    )
}

export default Register;
