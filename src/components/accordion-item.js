import React, { useState } from 'react'

function AccordionItem(props) {
  const [isVisible, setVisible] = useState(false)

  return (
    <div className="accordion-item">
      <p onClick={() => setVisible(!isVisible)} className="accordion-item__title">{props.item.question}</p>
      {isVisible && <p>{props.item.answer}</p>}
    </div>
  )
}

export default AccordionItem
