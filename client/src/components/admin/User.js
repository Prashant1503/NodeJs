import React from 'react';
import {Divider,Tabs,Button} from 'antd';
import "../../App.css";
import ListUser from './ListUser';
import AddEmployee from './AddEmployee';

/** import */
const {TabPane} = Tabs;
const operations = <Button>ADD</Button>;

/** function for tabs */
const createTab = () => {
    return (
        <>
         <Tabs  tabBarExtraContent={operations} style={{padding : 20,margin : 10,backgroundColor : '#FAFAFA'}} >
         {/* 1st tab for list */}
             <TabPane tab="List" key="1" >
                 <ListUser />
             </TabPane>
             {/* 2nd tab for add new employee */}
             <TabPane tab="Add New" key="2">
                <AddEmployee />
            </TabPane>
         </Tabs>
        </>

    )
}


const User = () => {
  return (
    <div>
      {createTab()}

      {/* tab content pages */}
      <div>
          
      </div>
    </div>
  )
}

export default User;
