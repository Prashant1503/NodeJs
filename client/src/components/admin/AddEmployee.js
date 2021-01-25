import React from 'react';
import {Form,Row,Col,Input,Button,Card,Select} from 'antd';

const {Option} = Select;

/** @function : emp registeration form */
const registerationForm = () => {
    return (
        <Card>
            <Col>
                <Row>
                {/* form for registering employees */}
                    <Form layout="horizontal">
                        {/* 1st input field for user name */}
                        <Form.Item name="UserName">
                            <Input placeholder="Enter user name" inputMode="text"  />
                        </Form.Item>
                        
                        {/* 2nd input field for email id */}
                        <Form.Item name="Email Id">
                            <Input placeholder="Enter email " inputMode="email" />
                        </Form.Item>

                         {/* 3rd input field for   */}
                         <Form.Item name="Contact Number">
                            <Input placeholder="Enter phone " inputMode="numeric" />
                        </Form.Item>

                        {/* 4th input field for   */}
                        <Form.Item name="Role">
                           <Select>
                               <Option>Account Manager</Option>
                               <Option>Project Manager</Option>
                               <Option>Employee</Option>
                           </Select>
                           
                        </Form.Item>
                        {/* submit btn */}
                        <div style={{justifyContent : 'space-evenly'}}>
                            <Button type="primary">Add </Button>
                            <Button type="secondary">Close </Button>
                            
                        </div>
                      
                    </Form>
                </Row>

                
            </Col>
        </Card>
    )
}

const AddEmployee = () => {
  return (
    <div style={{borderRadius : 10,padding : 8}}>
      {registerationForm()}
    </div>
  )
}

export default AddEmployee;
