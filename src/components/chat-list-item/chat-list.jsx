import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './chat-list.css';

class ChatListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[]
        }
    }
    generateMessages = id => {
        let activeUserMessages = [
            {
                chatId: 1,
                msgId: 0,
                sender: "Rachna",
                body: "We will meet as soon as possible",
                time: "April 25, 2018 13:21:03",
                status: 2,
                recvId: 0,
                recvIsGroup: false
            },
            {
                chatId: 1,
                msgId: 1,
                sender: "shiva",
                body: "Sure!",
                time: "April 25, 2018 13:22:03",
                status: 2,
                recvId: 2,
                recvIsGroup: false
            },
            {
                chatId: 2,
                msgId: 3,
                sender: "Monisha",
                body: "Hey, Will call you tomorrow",
                time: "April 25, 2018 13:21:03",
                status: 2,
                recvId: 0,
                recvIsGroup: false
            },
            {
                chatId: 2,
                msgId: 4,
                sender: "shiva",
                body: "Alright!",
                time: "April 25, 2018 13:22:03",
                status: 2,
                recvId: 2,
                recvIsGroup: false
            }
        ];
        activeUserMessages.forEach(msg => {
            if(id === msg.chatId){
                const checkMessageId = this.state.messages.find(id => msg.msgId === id.msgId);
                if(!checkMessageId){
                    this.state.messages.push(msg)
                }               
            }   
        })
        console.log("messages",this.state.messages);
    }
    render(){
        return(
            <Row className="chat-list-item" onClick={()=> {console.log(this.props.lastMessages.id);this.props.generateMessageArea(this.props.lastMessages.id);this.generateMessages(this.props.lastMessages.id)}}>
                         <Col span={3}><img className="profilePic" src = {this.props.lastMessages.pic} alt="Profile Pic"/></Col>
                         <Col span={17}>
                             <Row>
                                 <Col className="chat-name" span={24}>{this.props.lastMessages.name}</Col>
                                 <Col className="chat-msg" span={24}>{this.props.lastMessages.body}</Col>
                             </Row>
                         </Col>
                         <Col className="chat-time" span={4}>30-05-2020</Col>
            </Row>   
        )
    }
}
export default ChatListItem;