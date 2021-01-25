import React,{useState} from 'react';
import  CustomCards from '../../screens/Cards';
import {Space,Card, Col, Row,Avatar,Typography} from 'antd';
import ProjectSummary from './ProjectSummary';
import {AntDesignOutlined} from '@ant-design/icons';


const Dashboard = () => {

  return (
    <div>
       
        <div style={{backgroundColor : 'white',padding : 20}}>
           
            {/* card screen */}
            <div className="site-card-wrapper" onClick={console.log('Clicked')}>
              <Col span={8}>
              <Card hoverable >
                <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<AntDesignOutlined />}
                  />
              <h4>Users</h4>
            
          </Card>
                </Col>
              </div>
          
           
           {/* project-summary data table */}
           
           <div>
             <ProjectSummary />
           </div>

        </div>
    </div>
  )
}

export default Dashboard;
