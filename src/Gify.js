import React from 'react'

const Gify=({names,id,image})=> {
    return (
        <div>
            <h3>{names}</h3>
            <p>{id}</p>
            <img src={image}></img>
        </div>
    )
}

export default Gify;
