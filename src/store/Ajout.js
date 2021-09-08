import logo from '../logo.svg';
import '../App.css';
import { useDispatch, useSelector,} from "react-redux";
import { useHistory } from "react-router-dom";
import { createContactAsync } from '../redux/contact-slice';
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams
 } from "react-router-dom";

function Ajout() {
  const history = useHistory();
    const contact = useSelector((state) => state.contact);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(createContactAsync(values));
    };
    useEffect(() => {
              
    }, []);
    console.log("contact:", contact);
    const { Option } = Select;
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const tailLayout = {
       wrapperCol: { offset: 8, span: 8 },
    };
  

    return (
        <div className="App">    
             <Layout>
                   <Header className="header">
                     <div className="logo" />
                          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                               <Menu.Item key="1"><Link to="/Ajout">Ajout</Link> </Menu.Item>
                               <Menu.Item key="2"><Link to="/Affichage">Affichage</Link></Menu.Item>
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
                                           <Menu.Item key="1"><Link to="/Ajout">Ajout</Link> </Menu.Item>
                                           <Menu.Item key="2"><Link to="/Affichage">Affichage</Link></Menu.Item>
                                       </SubMenu>
                                    </Menu>
                              </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <h1> Remplir le formulaire</h1>
                            <Form {...layout} name="control-hooks" onFinish={onFinish}>
                                 <Form.Item name="lastname" label="nom" rules={[{ required: true }]}>
                                 <Input />
                                 </Form.Item>
                                 <Form.Item name="firstname" label="prenom" rules={[{ required: true }]}>
                                 <Input />
                                 </Form.Item>
                                 <Form.Item name="phonenumber" label="Numero" rules={[{ required: true }]}>
                                 <Input />
                                 </Form.Item>
    
                                 <Form.Item {...tailLayout}>
                                     <Button type="primary" htmlType="submit" loading={contact.loading}>
                                         Submit
                                      </Button>
                                 </Form.Item>
                             </Form>
                     </Content>
                              
                              </Layout>
                   </Content>
                  <Footer style={{ textAlign: 'center' }}>Redux Application phonebook</Footer>
             </Layout>
         </div>
    );
 }

export default Ajout;