import React from "react";

import './Sign-in-component.scss'
import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button";


class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state={

            email:'',
            password:'',
        }
    }

    handleSubmit = event => {
            event.preventDefault();
            this.setState({email:'',password:''})

    }

    handleChange = event => {

        const {name,value} = event.target;
        this.setState({[name]:value})
    }
        render() {
            return(
                <div className='sign-in'>
                        <h2> I already have account</h2>
                        
                        <span >Sign in with email and password</span>

                        <form onSubmit={this.handleSubmit}>  
                            <FormInput
                             name="email"
                              type= "email" 
                              onChange = {this.handleChange}
                              value={this.state.email}
                              label="Email"
                               required 
                               />

                            
                            
                            <FormInput
                             name="password" 
                            type= "password" 
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label="Password"
                            required />

                           

                            <CustomButton type='submit' > Sign In </CustomButton>
                            </form>
                    </div>
            )
        }

    }
    export default SignIn;