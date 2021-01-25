import React from 'react';
import {Card, Col, Row,Space,Avatar,Typography } from 'antd';
import AntDesignOutlined from '@ant-design/icons';
import '../App.css';

const {Title} = Typography;


const CustomCards = ({title,icon,key}) => {
  return (
    <div className="site-card-wrapper">
      <Col span={8}>
          <Row gutter={16} aria-orientation="horizontal">
            <Card hoverable key={key}  >
              <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  icon={<AntDesignOutlined />}
                />
              <Title level={4}>{title}</Title>
              
            </Card>
          </Row>
        </Col>
    </div>
  )
}

export default CustomCards;
