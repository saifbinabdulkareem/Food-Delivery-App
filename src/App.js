import React from 'react';
import './App.css';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Header from './Screens/Header';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
      showDashBoard: false
    }
    console.log('state===>', this.state)
  }
  render() { 
  return (
    <div className='Header'>
      <Header />
      <div className="App">   
          <SignUp />
          <SignIn />
      </div>
    </div>
  );
  }
}

export default App;
