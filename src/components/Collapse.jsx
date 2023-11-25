import '../sass/Collapse.scss'
import arrow from '../assets/img/arrow.svg'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function change() {
    if (isOpen === true) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="collapse-container">
      <div className="collapse-head">
        <h3 className="collapse-title">{title}</h3>
        <img
          className="arrow"
          style={{ transform: isOpen ? '' : 'rotate(180deg)' }}
          src={arrow}
          alt=""
          width="32"
          height="32"
          onClick={change}
        />
      </div>
      <div
        className="collapse-content"
        style={{
          transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
          maxHeight: isOpen ? '1000px' : '0',
        }}
      >
        {typeof content === 'string' && <p>{content}</p>}
        {typeof content === 'object' && (
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Collapse
