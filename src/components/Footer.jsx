import React from 'react'

function Footer(props) {

  // destructure props
  const {handleToggleModal} =  props

  return (
    <footer>
        <div className='bg-gradient'></div>
        <div>
            <h2>Bruce Wayne's Car</h2>
            <h1>Astronomy Picture of The Day</h1>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer