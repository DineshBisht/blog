import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';

import validator from 'validator'
import InputField from './fields/InputField';
import InputError from './fields/InputError';
class SignupForm extends Component {
    state = { 
        name:'',
        email:'',
        password:'',
        errors:{}
     }

    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]:value});
        if ( value ){
            this.setState({errors:{...this.state.errors,[name]:null}},function(){
                console.log(this.state.errors);
            })
        }
       
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const errors = this.validateForm();
        if ( Object.keys(errors).length === 0 ){
            console.log(this.state);
        }
    }

    validateForm = ()=>{
        const errors = {};
        
        const {name,email,password} = this.state;
        if ( !name ) errors.name = 'Name cannot be blank.';
        if ( !email ) errors.email = 'Email cannot be blank.';
        if ( !password ) errors.password = 'Password cannot be blank.';
        if ( email && !validator.isEmail(email) ) errors.email='Enter valid email';
        this.setState({errors})
        return errors;
    }
    render() { 
        const {errors} = this.state;
        
        return ( 
            <div className="signup-form"> 
                <h2>New User Signup!</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field className={errors.name ?'field error' : 'field'}>
                        <InputField type="text" placeholder="Name" name='name' onKeyUp={this.handleChange}/>
                        <InputError message={errors.name}/>
                        
                    </Form.Field>
                    <Form.Field className={errors.email?'field error' : 'field'}>
                        <InputField type='email'  placeholder='Email' name='email' onKeyUp={this.handleChange}/>
                        
                        <InputError message={errors.email}/>
                    </Form.Field>
                    <Form.Field className={errors.password?'field error' : 'field'} >
                        <InputField type="password" placeholder="Password" name='password' onKeyUp={this.handleChange}/>
                        <InputError message={errors.password}/>
                        
                    </Form.Field>
                    
                    
                    <button type="submit" className="btn btn-default">Signup</button>
                </Form>
            </div> 
         );
    }
}
 
export default SignupForm;