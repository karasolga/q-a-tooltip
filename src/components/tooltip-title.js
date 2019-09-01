import React, { useState } from 'react'

function TooltipTitle(props) {
  const [isHovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!isHovered)

  return (
    <div className="title">
      <h2 onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        Created questions
      </h2>
      <div
        className={isHovered ? 'tooltip-container--is-visible' : 'tooltip-container'}>
        <div className="tooltip">{props.tooltip}</div>
      </div>
    </div>
  )
}

export default TooltipTitle
