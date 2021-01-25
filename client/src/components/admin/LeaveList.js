import React,{useEffect,useState}from 'react';
import {  Link} from 'react-router-dom';
import {Card,Row,Col,Table,Space} from 'antd';
import {DeleteOutlined,EditOutlined  } from '@ant-design/icons';

import { getAllLeave } from '../../redux/actions/admin/AdminAction';
import {  connect} from 'react-redux';


/** columns and data source for leave requested table  */
/** custom data for leave request table */
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'TITLE',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'TYPE',
        dataIndex: 'leave_type',
        key: 'leave_type',
    },
    {
        title: 'FROM',
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: 'TO',
        dataIndex: 'to',
        key: 'to',
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




const LeaveList = ({getLeave,leaves}) => {

    useEffect(() => {
        
        getLeave();
        console.log(leaves);
        
    }, []);

   
    
    /** data function */
//    const data = () => {
//        return item.map((key,index) => {
//            return ({
//                 id : key.applicantID,
//                 title : key.title,
//                 leave_type : key.type,
//                 from : key.startDate,
//                 to : key.endDate,
//                 reason : key.reason
//            })
//        })
//    }

//    console.log(item);
    
   
    return (
        
        <Card>
          <h3>Leave Request</h3>
          
          {/* employee list table */}
          <Table columns={columns}  ></Table>
        </Card>    
  )
}

    /** preparing leave table data */
    
  
/** MapStateToProps i.e dispatching action */
const MapStateToProps = state =>{
    return {
        leaves : state.leaves
    }
};


/** MapDispatchToProps  */
const MapDispatchToProps = dispatch => {
    return {

        getLeave : () => dispatch(getAllLeave)
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(LeaveList);
