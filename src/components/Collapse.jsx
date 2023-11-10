import '../styles/Collapse.css'
import arrow from '../assets/img/arrow.svg'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [style, setStyle] = useState('closed')
  const [isOpen, setIsOpen] = useState(false)
  const collapseStyle = `collapse-content ${style}`
  const arrowStyle = `arrow-${style}`

  function change() {
    if (isOpen === true) {
      setIsOpen(false)
      setStyle('closed')
    } else {
      setIsOpen(true)
      setStyle('open')
    }
  }

  return (
    <div className="collapse-container">
      <div className="collapse-head">
        <h3 className="collapse-title">{title}</h3>
        <img
          className={arrowStyle}
          src={arrow}
          alt=""
          width="32"
          height="32"
          onClick={change}
        />
      </div>
      {typeof content === 'string' && (
        <div className={collapseStyle}>
          <p>{content}</p>
        </div>
      )}
      {typeof content === 'object' && (
        <div className={collapseStyle}>
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Collapse
