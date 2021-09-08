import '../App.css';
import '../Ajout.css';
import axios from  'axios'
import { Table ,Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react';
import { Layout, Menu} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import {
  BrowserRouter as Router,
  Link,useHistory, 
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { receveContactAsync,deleteContactAsync} from '../redux/contact-slice';

function Affichage() {  
   let history = useHistory();
   const dispatch = useDispatch();
   const {contacts} = useSelector((state) => state.contact);
      console.log(contacts)
    useEffect(() => {
         dispatch(receveContactAsync());
    }, [dispatch]);
    const Delete = (id) => {  
         dispatch(deleteContactAsync(id,dispatch)); 
       
     };
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const { Option } = Select;
    const columns = [
        { title: 'Nom', dataIndex: 'firstname', key: 'firstname' },
        { title: 'Prenom', dataIndex: 'lastname', key: 'lastname' },
        { title: 'Numero', dataIndex: 'phonenumber', key: 'phonenumber' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'id',
          render: (record) => 
         <Space size="middle">
              <a onClick={()=>Delete(record.id)}>Delete</a>
             
              <a > <Link to={{pathname: `/Modif/${record.id}`}}>Modifier</Link> </a>
        </Space>


},
]
  return (
   
      <Layout>
            <Header className="header">
             <div className="logo" />
             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/Ajout">Ajout</Link> </Menu.Item>
                <Menu.Item key="2"><Link to="/Affichage">liste</Link></Menu.Item>
             </Menu>
             </Header>
      <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                  <Sider className="site-layout-background" width={200}>
                   <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%' }}
                   >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                      <Menu.Item key="2"><Link to="/Ajout">Ajout</Link></Menu.Item>
                      <Menu.Item key="2"><Link to="/Affichage">Affichage</Link></Menu.Item>
                  </SubMenu>
            
                 </Menu>
                 </Sider>

                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                 <h1>Liste des personnes</h1>
                <Table
                 columns={columns}
                 dataSource={contacts}/>
                </Content>

            </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Redux Application phonebook</Footer>
    </Layout>
   
  
   
  );
}

export default Affichage;