import React from "react";

import FormInput from "../Form-input/Form-input.component";
import CustomButton from "../Custom-button/Custom-button";
import { auth ,createUserProfileDocument } from './../../firebase/firebase.utils';

import './SignUp.styles.scss';


class SignUp extends React.Component {
    constructor(){
            super();

            this.state = {

                displayName: '',
                email: '',
                password: '',
                confirmPassword:''
            }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

           await  createUserProfileDocument(user,{displayName});
           this.setState({

            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }); //clear out form


        }
        catch(error){
            console.log(error);

        };

        

    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
                <div className='sign-up'>
                        <h2 className='title'> I do not have a account </h2>
                        <span>Sign Up with email and password </span>
                        <form className='sign-up-form' onSubmit={this.handleSubmit}>
                            <FormInput
                                type ='text'
                                name='displayName'
                                value={displayName}
                                onChange = {this.handleChange}
                                label='Display Name'
                                required

                            >
                                </FormInput>
                                <FormInput
                                type ='email'
                                name='email'
                                value={email}
                                onChange = {this.handleChange}
                                label='Email'
                                required

                            >
                                </FormInput>

                                <FormInput
                                type ='password'
                                name='password'
                                value={password}
                                onChange = {this.handleChange}
                                label='Password'
                                required

                            >
                                </FormInput>

                                <FormInput
                                type ='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange = {this.handleChange}
                                label='Confirm Password'
                                required

                            >
                                </FormInput>

                                    <CustomButton type ='submit'>SIGN UP</CustomButton>
                            </form>

                    </div>

        )
    }
}
export default SignUp;