import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "../src/components/Home/Login"
import Logout from "../src/components/Logout"
import ProfileFor from "../src/components/Profile/ProfileFor"
import Dashboard from "../src/components/Dashboard/Main"
import Registration from '../src/components/Registration/Registration';
import UserProfile from '../src/components/Profile/ProfileFor';
import Search from '../src/components/Profile/Search';
import MatchesProfile from '../src/components/Profile/MatchesProfile';
import LikeProfile from '../src/components/Profile/LikeProfile';
import Test from '../src/components/Registration/Testing';
import AdditionalProfileDetails from '../src/components/Profile/AdditionalProfileDetails';
class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <div>
           <Header/> 
            <Switch>
              <Route exact path='/' component={Login} />
              <Route  path='/Login' component={Login} />
              <Route exact path='/Logout' component={Logout} />
              <Route exact path='/UserProfile' component={UserProfile} />
              <Route exact path='/Registration' component={Registration}/>
              <Route exact path='/Profilefor' component={ProfileFor}/>
              <Route exact path='/Dashboard' component={Dashboard}/>
              <Route exact path='/Search' component={Search}/>
              <Route exact path='/MatchesProfile' component={MatchesProfile}/>
              <Route exact path='/LikeProfile' component={LikeProfile}/>
              <Route exact path='/Test' component={Test}/>
              <Route exact path='/AdditionalProfileDetails' component={AdditionalProfileDetails}/>
            </Switch>
            {/* <Footer/> */}
     </div>
    );
  }
}

export default App;
