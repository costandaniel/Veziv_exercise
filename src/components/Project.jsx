import React from 'react'
import './Project.scss'
import {MdDeleteForever} from 'react-icons/md'

function Project({title,description,image}) {
  return (
    <div className="project">
        <div className="project__text">
          <p className='title'>{title}</p>
          <p className="project__description">
            {description}
          </p>
        </div>
        <img src={image} alt="img" />
      <MdDeleteForever className='delete__icon' />
    </div>
    
  )
}

export default Project