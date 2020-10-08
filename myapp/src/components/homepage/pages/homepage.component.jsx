import React from 'react'
import './homepage.styles.scss'
import Directory from '../../../containers/HomePageDirectory/HomePageDirectory.containers'

const homePage=()=>{
	return(
		<div className='homepage'>
			<Directory/>
		</div>
	)
}
export default homePage