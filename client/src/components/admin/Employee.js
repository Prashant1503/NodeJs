import React from 'react';
import {Tabs,Table,Space,Card} from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AllEmployeeList from './AllEmployeeList';
const {TabPane} = Tabs;


/** custom data for leave request table */
const columns = [
    {
        title: 'EMPLOYEE ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'LEAVE TYPE',
        dataIndex: 'leave_type',
        key: 'leave_type',
    },
    {
        title: 'REASON',
        dataIndex: 'reason',
        key: 'reason',
    },
    {
        title: 'ACTION',
        dataIndex: 'action',
        key: 'action',
        render : () => (
            <Space style={{margin : 10,padding : 10,justifyContent : 'space-around'}} >
            {/* div for edit icon */}
            <div >
                <Link to="/update/leave-request">
                    {<EditOutlined default="none" />}
                </Link>

                <Link to="/del/leave-request">
                    {<DeleteOutlined default="none" />}
                </Link>
            </div>
               
            </Space>
        )
    },
];

const data = [
    {
        key: '1',
        id: '#1234',
        name : "Prashant Vani",
        leave_type : "Casual Leave",
        reason : "None",
        action : ""
    },
    {
        key: '2',
        id: '#1235',
        name : "Vijay Bhati",
        leave_type : "Sick Leave",
        reason : "Fever",
        action : ""
    }
];

/** leave-request function */
function leaveRequestTable () {
    return (
        <div>
            <Card bordered="true" style={{borderRadius : 10,padding : 10}}>
            <h3>Leave Request</h3> <br/>
            <Table columns={columns} dataSource={data}></Table>
        </Card>
        </div>
        
    )
}

const Employee = () => {
  return (
    <div>
      {/* create tabs for employees */}
      <Tabs style={{padding : 20,margin : 10,backgroundColor : '#FAFAFA'}} >
         {/* 1st tab for list */}
             <TabPane tab="All" key="1" >
                <AllEmployeeList />
             </TabPane>
            
            {/* 2nd tab for leave-request */}
            <TabPane tab="Leave Request" key="3">
            {/* content for leave-request */}
                {leaveRequestTable()}
            </TabPane>
         </Tabs>
    </div>
  )
}

export default Employee;
