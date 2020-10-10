import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const header=()=>{
  return(
    <div className='header'>
      <Link to="/">
          <Logo className='logo'/>
      </Link>
      <div className='options'>
          <Link to="/shop" className="option">
              SHOP
          </Link>
            <Link to="/contact" className="option">
              CONTACT
          </Link>
      </div>
    </div>
  )
}
export default header