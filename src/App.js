import React, { Component } from 'react';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Images_api_New from './components/Images_api'
import Redirect_Coffee from './components/Redirect_Coffee'
import DivideArray from './components/Divide_Array'
class App extends Component {
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
                <Route exact path= "/" component={Customers}/>
                <Route exact path= "/Images_api_New" component={Images_api_New}/>
                <Route exact path= "/Redirect_New_Page_DATA" component={Redirect_Coffee}/>
                <Route exact path= "/DivideArray" component={DivideArray}/>
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
