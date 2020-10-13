import React from 'react'
import SignIn from '../../containers/Sign-In/Sign-In.container'
import SignUp from '../../containers/Sign-Up/Sign-Up.containers'
import './sign-in-and-sign-up.styles.scss'
const signInAndSignUpPage=()=>{
  return(
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp/>
    </div>
  )
}
export default signInAndSignUpPage