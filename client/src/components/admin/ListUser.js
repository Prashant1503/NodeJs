import React from 'react';
import {Table,Tag,Space,Tabs,Card} from 'antd';



/** table data */
const data = [
    {
        key: '1',
        name: 'Prashant Vani',
        created_at : "24 Jun, 2015",
        role : "Employee",
        action : "HRM",
      },
      {
        key: '2',
        name: 'Ajay Vandra',
        created_at : "25 Jun, 2016",
        role : "Admin",
        action : "None",
      },
];

/** column title */
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role', 
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action', 
    },

];

/** function for list tab content */
const userTable = () => {
    return (
        <Table columns={columns} dataSource={data}></Table>
    )
}

const ListUser = () => {
  return (
    <div>
      <Card style={{margin :10,borderRadius : 10,padding : 8}}>
        <h3 style={{margin: 5}}>User List</h3> <br/>
          {userTable()}
      </Card>
    </div>
  )
}

export default ListUser;
