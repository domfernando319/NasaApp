import React from 'react'

function SideBar(props) {
    const {handleToggleModal} = props;
    return (
    <div className='sidebar'>
        <div className='bg-overlay' onClick={handleToggleModal}>

        </div>
        <div className='sidebar-content'>
            <h2>
                Bruce Wayne's Car
            </h2>
            <div>
                <p>Description</p>
                <p>asdfasasdjasdasdlfasdjgasdj</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>


        </div>
    </div>
    )
}

export default SideBar