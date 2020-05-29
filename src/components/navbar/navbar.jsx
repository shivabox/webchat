import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import pic from '../../pro.png';
import './navbar.styles.css';
import { MoreOutlined } from '@ant-design/icons';

const NavBar = () => {
    return(
        <Row>
        <Col span={3}>
            <img className="profilePic" src = {pic} alt="Profile Pic"/>
        </Col>
        <Col span={19}>
            <div className="user-name">Shiva</div>
        </Col>
        <Col span={2}><MoreOutlined style={{ fontSize: '18px', color: 'white', cursor: 'pointer' }} /></Col>
    </Row>        
    );
};
export default NavBar;