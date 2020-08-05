import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';

import './sign-in.styles.scss';

import { signInWithGoogle} from '../../../src/firebase/firebase.utils.js';


// using a class component since we need to store what user types in as state

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({ email:"", password:""})

    }
    
    handleChange = event => {
        const {value, name} = event.target;

        // THIS IS SOME GOOD SHIT RIGHT HERE. REVIEW LATER
        this.setState({[name]: value});

}


    render(){
        return(
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span> Sign in with your email and password</span>
                    

                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" value={this.state.email} label='email' handleChange={this.handleChange} required />              
                        <FormInput name="password" type="password" value={this.state.password} label='password' handleChange={this.handleChange} required />                     
                        <div className='buttons'>
                            <CustomButton type="submit">Sign In</CustomButton>                    
                            <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>            
                        </div>
                         </form>
                </div>
        )
    }
}

export default SignIn;