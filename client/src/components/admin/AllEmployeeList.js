import React,{useEffect} from 'react';
import {Card,Row,Col,Table} from 'antd';
import {  } from '@ant-design/icons';
import { connect, Connect } from 'react-redux';
import { getEmployeeList } from '../../redux/actions/admin/AdminAction';


/** columns and data source for employee list table  */
const columns = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'PHONE',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'JOIN DATE',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'ROLE',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'ACTION',
        dataIndex: 'action',
        key: 'action',
    }
];


const AllEmployeeList = ({getEmployees,employees}) => {

    useEffect(() => {
        
      getEmployees();
    }, []);

    console.log(employees);
  return (
    <Card>
      <h3>Employee List</h3>
        
      {/* employee list table */}
      <Table columns={columns} ></Table>
    </Card>
  )
}

/** MapDispatchToProps */
const MapDispatchToProps = dispatch => {
    return {
        getEmployees : () => dispatch(getEmployeeList())
    }
}

/** MapStateToProps */
const MapStateToProps = state => {
    return {
        employees : state.user
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(AllEmployeeList);
