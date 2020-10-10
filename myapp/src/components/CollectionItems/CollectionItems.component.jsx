import React from 'react'
import './CollectionItems.styles.scss'

const collectionItems=({id,imageUrl,name,price})=>{
  return(
    <div className='collection-item'>
      <div
       className='image'
       style={{
         backgroundImage:`url(${imageUrl})`
       }} 
      />
      <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>
    </div>
  )
}
export default collectionItems