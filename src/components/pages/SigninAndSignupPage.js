import React, { Component } from 'react';


import SigninForm from '../forms/SigninForm';
import SignupForm from '../forms/SignupForm';
class SigninAndSignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="col-sm-9">
            <section id="form"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <SigninForm/>
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <div className="col-sm-4">
                            <SignupForm/>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
        );
    }
}
 
export default SigninAndSignupPage;