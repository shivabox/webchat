import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import pic from '../pro.png'
import './chat.styles.css';
import NavBar from '../components/navbar/navbar';
import ChatListItem from '../components/chat-list-item/chat-list';
import InputArea from '../components/input-area/input.area';

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                id: 0,
                name: "Shiva",
                pic: pic
            },
            lastMessages: [
                {
                    id: 1,
                    name: "Rachna",
                    pic: pic,
                    body: "where are you, buddy?",
                    time: "April 25, 2018 13:21:03",
                    status: 2,
                    recvId: 0,
                    recvIsGroup: false
                },
                {
                    id: 2,
                    name: "Monisha",
                    pic: pic,
                    body: "at home",
                    time: "April 25, 2018 13:22:03",
                    status: 2,
                    recvId: 2,
                    recvIsGroup: false
                }
            ],
            generateMessageArea: false,
            getUserClickedId: 0
        };
    }
    generateMessageArea = id => {
        this.setState({generateMessageArea: true});
        this.setState({getUserClickedId: id-1})
    } 
    render() {
        return (
            
                <Row className="chat-wrapper">
                    <Col span={8} >                       
                        <NavBar user={this.state.user} col1={3} col2={19} col3={2}/>
                        <div id="chat-list">
                            {this.state.lastMessages.map(lastMessages => (<ChatListItem key={lastMessages.id} lastMessages={lastMessages} generateMessageArea={this.generateMessageArea}/>))}
                        </div>
                    </Col>
                    <Col span={16} style={{background: "#607d8b12",width: "100%"}}>
                    {
                        this.state.generateMessageArea ?
                        <div>
                            <NavBar user={this.state.lastMessages[this.state.getUserClickedId]} col1={2} col2={21} col3={1}/>
                            <div id="messages">
                                <Row className="message-item align-self">
                                    <Col span={24}><div className="chat-name">Rachna</div></Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col className="msg-body" span={16}>Hello</Col>
                                            <Col className="msg-time" span={8}>12:15</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="message-item align-other">
                                    <Col span={24}><div className="chat-name">Rachna</div></Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col className="msg-body" span={16}>Hello</Col>
                                            <Col className="msg-time" span={8}>12:15</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <InputArea />
                        </div>                                            
                        :
                        ""
                    }                  
                    </Col>
                </Row>
            
        );
    }
}

export default Chat;