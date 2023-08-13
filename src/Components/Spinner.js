import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center p-10'>
        <img src={loading} alt='loading'/>
      </div>
    )
}

export default Spinner