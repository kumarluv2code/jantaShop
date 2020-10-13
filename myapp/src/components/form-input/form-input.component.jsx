import React from 'react'
import './form-input.styles.scss'

const input=({onChangeHandler,label,...otherInputProps})=>{
return(
  <div className='group'>
    <input 
      className='form-input'
      onChange={onChangeHandler} 
      {...otherInputProps}
      value={otherInputProps.value}
      required
      />
    {
      label?
      (<label 
      className={`${otherInputProps.value.length? 'shrink':''
      } form-input-label`}
      >
       {label}
       </label>):null
    }
</div>
)
}
export default input