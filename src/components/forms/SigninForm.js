import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';
class SigninForm extends Component {
    state = {  }
    render() { 
        return (  
        <div className="login-form"> 
            <h2>Login to your account</h2>
            <Form >
                
                <Form.Field>
                    <input type="text" name='name' placeholder="Name" />
                </Form.Field>
                <Form.Field>
                <input type="email" name='email' placeholder="Email Address" />
                </Form.Field>
                
                <span>
                    <input type="checkbox" className="checkbox"/> 
                        Keep me signed in
                    </span>
                <button type="submit" className="btn btn-default">Login</button>
            </Form>
        </div> 
        );
    }
}
 
export default SigninForm;