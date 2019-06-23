import React from 'react';
import './App.css';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Header from './Screens/Header';
import Tag from './Components/Tags';
import Grids from './Components/Grids'
import Footer from './Screens/Footer'
import Chips from './Components/CountryChips';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
      showProfile: false
    }
  }
  afterLogin() {
    this.setState({ showProfile: true });
  }
  render() { 
  return (
    <div className='Header'>
      <Header /> 
      <div className="app_bg" style={{width:"100%", height:"571px" }}>
      <Tag style={{}} />
      </div> 
      <div className="App" >
        <div className="cards" style={{marginTop:"0.8in"}}>
          <Grids />
        </div>
        <div className="countryChips">
          <Chips />
        </div>
        {!this.state.showProfile ? <SignUp afterLogin={this.afterLogin.bind(this)} /> : <SignIn />}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  }
}

export default App;
