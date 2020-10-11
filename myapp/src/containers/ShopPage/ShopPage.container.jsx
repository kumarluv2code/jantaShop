import React from 'react'
import ShopData from './ShopData.jsx'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component'
 
class ShopPage extends React.Component{
  state={
    collections:ShopData
  }
  render(){
    return(
      <div className='shop-page'>
        {
            this.state.collections.map(({id,...otherCollectionProps})=>{
              return(
                <CollectionPreview 
                key={id} 
                {...otherCollectionProps}
                />
              )
          })
        }
      </div>
    )
  }
}
export default ShopPage