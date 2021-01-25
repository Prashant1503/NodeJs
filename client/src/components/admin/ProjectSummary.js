import React from 'react';
import {Card,Typography,Table,Space} from 'antd';

const Title = Typography;

/** Table card */
function SummaryCard() {

    /** Column arr for table */
    const dataSource = [
        {
          key: '1',
          id: '#123',
          client : "Sean Black",
          team : "Angular Developer",
          project : "HRM",
          cost : "$14,500",
          payment : "Done",
          status : "Delivered"
        
        },
        {
            key: '2',
            id: '#124',
            client : "Sean Black",
            team : "Angular Developer",
            project : "HRM",
            cost : "$14,500",
            payment : "Done",
            status : "Delivered"
          
          },
          {
            key: '3',
            id: '#125',
            client : "Sean Black",
            team : "ReactJs Developer",
            project : "HRM",
            cost : "$23,8900",
            payment : "Pending",
            status : "Active"
          
          },
      ];
      
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Client Name',
          dataIndex: 'client',
          key: 'client',
        },
        {
          title: 'Team',
          dataIndex: 'team',
          key: 'team',
        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
          },
          {
            title: 'Project Cost',
            dataIndex: 'cost',
            key: 'cost',
          },
          {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
            
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
      ];

    return (
     <Space>
         <Card title="Project Summary">
             <Table columns={columns} dataSource={dataSource}></Table>
            </Card>
     </Space>
       
    )

}


const ProjectSummary = () => {
  return (
    <div style={{padding : 10}}>
      {SummaryCard()}
    </div>
  )
}

export default ProjectSummary;
