import React from 'react'
import Input from '../../components/form-input/form-input.component'
import Button from '../../components/Button/button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './Sign-up.styles.scss'
class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  formSubmitHandler = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('Invalid password: ')
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
       await createUserProfileDocument(user, { displayName })
      this.setState({
         displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }
  onChangeHandler = (event) => {
    console.log(event.target.value)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    console.log(this.state.confirmPassword)
    return (
      <div className = 'sign-up'>
        <h2 className='title'>I dont have an account </h2>
        <span>please login with email and password</span>
        <form  onSubmit={this.formSubmitHandler}>
          <Input 
            type='text'
            name='displayName'
            value={this.state.displayName}
            onChangeHandler={this.onChangeHandler}
            label='Display Name'
            required
          />
          <Input
            type='email'
            name='email'
            value={this.state.email}
            onChangeHandler={this.onChangeHandler}
            label='Email'
            required
          />
          <Input
            type='Password'
            name='password'
            value={this.state.password}
            onChangeHandler={this.onChangeHandler}
            label='Password'
            required
          />
          <Input
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChangeHandler={this.onChangeHandler}
            label="confirm Password"
            required
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    )
  }
}
export default SignUp