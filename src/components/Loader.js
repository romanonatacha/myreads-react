import React from 'react'

const Loader = () => { 
    return (
        <div className="loader"> 
            <img src={require('../icons/loader.gif')} alt="loading..." />
        </div>
    )
}

export default Loader