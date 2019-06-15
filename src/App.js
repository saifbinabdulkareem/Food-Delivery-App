import React from 'react';
import './App.css';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Header from './Screens/Header';
import Tag from './Components/Tags';
import FoodCards from './Components/FoodCards';

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
      <div className="app_bg" style={{width:"100%", height:"571px" }}>
      <Tag style={{}} />
      </div> 
      <div className="App">
          <FoodCards />
          {/* <SignUp />
          <SignIn /> */}
      </div>
    </div>
  );
  }
}

export default App;
