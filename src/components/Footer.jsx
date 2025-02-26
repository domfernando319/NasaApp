import React from 'react'

function Footer(props) {

  // destructure props
  const {handleToggleModal, data} =  props

  return (
    <footer>
        <div className='bg-gradient'></div>
        <div>
            <h1>Astronomy Picture of The Day</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer