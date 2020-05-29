import React from 'react';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './signin.styles.css';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    handleClick = () => {
        this.props.showSignUp();
        
      }
    onFinish =  values => {
        console.log('Received values of form: ', values);
        this.props.history.push("/chat");
    };
    render(){
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                
                onFinish={this.onFinish}
            >
                {/* <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item> */}
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <span className="login-form-forgot">
                        Forgot password
              </span>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={signInWithGoogle} htmlType="button" className="login-form-button">
                        Sign in with Google{' '}
                    </Button>
                    Or <span onClick={this.handleClick}>register now!</span>
                </Form.Item>
            </Form>
        );
    }
}


export default withRouter(SignIn);