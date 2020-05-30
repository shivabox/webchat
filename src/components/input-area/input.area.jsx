import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import './input.area.styles.css';
import { Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const InputArea = () => {
    return(
        <div id="input-area">
            <Row>
                <Col span={23}><Input placeholder="Type your message" /></Col>
                <Col span={1}>
                    <div style={{marginLeft: "5px", padding: "3px", cursor: "pointer"}}><SendOutlined style={{ fontSize: '18px', cursor: 'pointer' }}/></div>                               
                </Col>
            </Row>                       
        </div>   
    );
};
export default InputArea;