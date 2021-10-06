import React from "react";

import './Sign-in-component.scss'
import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state={

            email:'',
            password:'',
        }
    }

    handleSubmit = async event => {
            event.preventDefault();

            const {email,password} = this.state;

            try {
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''});

            }
            catch(error)
            {
                console.log(error);

            }

            

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

                           <div className='button'>
                            <CustomButton type='submit' >SIGN IN</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{''} SIGN IN WITH GOOGLE{''}
                                  </CustomButton>
                                  </div>
                            </form>
                    </div>
            )
        }

    }
    export default SignIn;
