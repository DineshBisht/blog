import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SigninAndSignupPage from "./pages/SigninAndSignupPage";
import BlogLists from './blog/BlogLists';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <BrowserRouter>
        <Switch>
            <Route path='/' component={BlogLists} exact/>
            <Route path='/signin-and-signup' component={SigninAndSignupPage} exact/>
            </Switch>
        </BrowserRouter>
            
        );
    }
}
 
export default App;