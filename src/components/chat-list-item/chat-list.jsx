import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import pic from '../../pro.png';
import './chat-list.css';


const ChatListItem = () => {
    return(
        <Row className="chat-list-item">
                         <Col span={3}><img className="profilePic" src = {pic} alt="Profile Pic"/></Col>
                         <Col span={17}>
                             <Row>
                                 <Col className="chat-name" span={24}>Friends</Col>
                                 <Col className="chat-msg" span={24}>Hey</Col>
                             </Row>
                         </Col>
                         <Col className="chat-time" span={4}>30-05-2020</Col>
                     </Row>   
    );
};
export default ChatListItem;