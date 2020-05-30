import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './navbar.styles.css';
import { MoreOutlined } from '@ant-design/icons';

const NavBar = props => {
    return(
        <div id="navbar">
            <Row>
                <Col span={props.col1}>
                    <img className="profilePic" src = {props.user.pic} alt="Profile Pic"/>
                </Col>
                <Col span={props.col2}>
                    <div className="user-name">{props.user.name}</div>
                </Col>
                <Col span={props.col3}><MoreOutlined style={{ fontSize: '18px', color: 'white', cursor: 'pointer' }} /></Col>
            </Row>  
        </div>      
    );
};
export default NavBar;