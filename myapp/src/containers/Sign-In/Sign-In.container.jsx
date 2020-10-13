import React from 'react'
import Input from '../../components/form-input/form-input.component'
import './Sign-in.styles.scss'
import Button from '../../components/Button/button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
  state={
    email:'',
    password:'',
  }

  formSubmitHandler=(event)=>{
    event.preventDefault()
    this.setState({email: '',password: ''})
  }
  onChangeHandler=(event)=>{
    const {name,value} = event.target;
    this.setState({[name]: value})
  }
  render(){
    return( 
      <div className='sign-in'>
      <h2>I hav allready an account</h2>
      <span>Sign in with your email and password</span>

      <form onClick={this.formSubmitHandler}>
          <Input
            type="email"
            name="email" 
          value={this.state.email}
          onChangeHandler={this.onChangeHandler}
          label="email" 
          required
          />
        <Input type="password" name="password" 
          value={this.state.password} 
          onChangeHandler={this.onChangeHandler}
          label="password" 
          required
          />
          <div className='buttons'>
            <Button  type="submit">SIGN IN</Button>
            <Button 
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              {''} 
                SIGN IN WITH GOOGLE 
              {''}
            </Button>
          </div>
      </form>
      </div>
    )
  }
}
export default SignIn