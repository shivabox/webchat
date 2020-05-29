import React from 'react';
import { Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import SignInAndSignUp from './pages/signinandsignup';
import Chat from './pages/chat'
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component ={SignInAndSignUp} />
      <Route exact path='/chat' component ={Chat} />
      </Switch>
    </div>
  );
}
}
export default App;
