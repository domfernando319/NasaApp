import React from 'react'

function Main(props) {
  const {data} = props

  return (
    <div className='img-container'>
      <img src={data.hdurl} alt={data?.title || 'bg-img'} className='bg-image'/>

    </div>
  )
}

export default Main