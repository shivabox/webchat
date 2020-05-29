import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './chat.styles.css';
import NavBar from '../components/navbar/navbar';
import ChatListItem from '../components/chat-list-item/chat-list';

class Chat extends React.Component {
  render() {
    return (
     <div className="chat-wrapper">
         <Row>
             <Col span={8}>
                 <div id="navbar">
                    <NavBar/>
                 </div>
                 <div id="chat-list">
                     <ChatListItem/>
                 </div>
             </Col>
             <Col span={16}></Col>
         </Row>
     </div>
    );
  }
}

export default Chat;