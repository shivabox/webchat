import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import logo from '../logo.svg';
import './signinandsignup.styles.css';

import SignIn from '../components/signin/signin';
import SignUp from '../components/signup/signup';



class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUpForm:true
    }
  }
  showSignUp = () => {
    this.setState({showSignUpForm: false});
  }
  render() {
    return (
      <Row className="signin-container">
        <Col className="signin-image" span={12}>
          <h1 className="app-title">Web Chat</h1>
          <div className="center">
            <img className="logo" src={logo} style={{ width: '400px', height: '400px' }} alt="logo" />
          </div>
        </Col>
        <Col className="signin-form" span={12}>
          <div className="form-wrapper">
            {this.state.showSignUpForm ? <SignIn showSignUp={this.showSignUp}/> : <SignUp />}
          </div>
        </Col>
      </Row>
    );
  }
}

export default SignInAndSignUp;