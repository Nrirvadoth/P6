import '../styles/collapse.css'
import arrow from '../assets/img/arrow.svg'

function Collapse({ title, content }) {
  return (
    <div className="collapse-container">
      <div className="collapse-head">
        <h3 className="collapse-title">{title}</h3>
        <img src={arrow} alt="" width="32" height="32" />
      </div>
      {typeof content === 'string' && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
      {typeof content === 'object' && (
        <div className="collapse-content">
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
