import React from 'react'
import './button.styles.scss'

const button=({children,isGoogleSignIn,...otherProps})=>{return(
  <div>
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in': ''} 
                custom-button div`}
                {...otherProps}>
      {children} 
  </button>
  </div>
)}
export default button