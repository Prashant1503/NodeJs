import React,{useState} from 'react';
import { connect } from 'react-redux';
import {logOutUser} from '../redux/actions/auth/auth';

import { BrowserRouter as Router,useHistory,Link,Route} from 'react-router-dom';
import {  Layout, Menu,Space,Button} from 'antd';
import { 
    CalendarOutlined,
    DashboardOutlined,
    DesktopOutlined,
    DollarCircleOutlined, 
    MenuFoldOutlined,
    ProfileOutlined,
    SettingOutlined, 
    TeamOutlined, 
    UserOutlined } from '@ant-design/icons';

// import components
import Employee from '../components/admin/Employee';
import Title from 'antd/lib/typography/Title';
import AllEmployeeList from '../components/admin/AllEmployeeList';
import Holidays from '../components/admin/Holidays';
import LeaveList from '../components/admin/LeaveList';
import Login from '../components/auth/Login';
import Dashboard from '../components/admin/Dashboard';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


/**actions */

/** end of component */


const NavBar = ({logOutUser}) => {

    /** hooks for toggle */
    const [collapse,setCollapse] = useState(false);
    const history = useHistory();

  return (
    <Router>
       <Layout style={{ minHeight: '100vh' }}>

        {/* sider part */}
            <Sider
                collapsible
                >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {/* for dashboard */}
                    <Menu.Item >
                        <DashboardOutlined />
                        <span>Dashboard</span>
                        <Link to="/" />
                    </Menu.Item>

                {/* for employee item and sub-item */}
                <SubMenu  icon={<UserOutlined />} title="Employees">
                    
                    <Menu.Item key="1">
                        <TeamOutlined />
                        <span>List employee</span>
                        <Link to="/all/employees" />
                    </Menu.Item>

                    <Menu.Item >
                        <DashboardOutlined />
                        <span>Leave Request </span>
                        <Link to="/leave-request" />
                    </Menu.Item>

                </SubMenu>

                {/* Menu for holidays list */}
                <Menu.Item  >
                        <CalendarOutlined  />
                        <span>Holidays </span>
                        <Link to="/holidays" />
                    </Menu.Item>
                
                {/* payroll management item and subitem */}
                <SubMenu  icon={<UserOutlined />} title="Payroll">
                    <Menu.Item >
                        <DashboardOutlined />
                        <span>Employee Salary</span>
                        <Link to="/employee-salary" />
                    </Menu.Item>

                    <Menu.Item >
                        <DollarCircleOutlined />
                        <span>PaySlip </span>
                        <Link to="/payslip" />
                    </Menu.Item>

                </SubMenu>

                </Menu>
            </Sider>
        <Layout >

            {/* header */}

            <Space style={{ background: '#fff', padding: 10, paddingLeft: 16,float :"right",alignItems : 'end',justifyContent : 'flex-end'}} >
            
            
            <h3 >Hi,Prashant</h3>
            <UserOutlined />
            
            
            
            {window.localStorage.getItem("token") ? ( 
                <Button 
                type='primary' 
                size="middle"   
                onClick={logOutUser(history)}
                style={{borderRadius : 8,backgroundColor : 'red',color : 'white'}}
                    >Sign out</Button>
            ) : 
            <Route exact path="/login" component={Login}></Route>
            }
            

            </Space >
            
            {/* content */}
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/all/employees" component={AllEmployeeList} />
                <Route exact path="/leave-request" component={LeaveList} />
                <Route exact path="/holidays" component={Holidays} />

            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <strong>Hack Stack ©2021 Created by Prashant Vani</strong>
            </Footer>
        </Layout>

        </Layout>

            </Router>
  )
}

/** MapDispatchToProps */
const MapDispatchToProps = dispatch => {
    return {
        logOutUser  
    }
}

export default connect(null,MapDispatchToProps)(NavBar);
