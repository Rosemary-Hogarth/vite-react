import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ButtonSection() {
  return(
    <div className="button-container button">
      <button href="#" className="email-btn">
        <FontAwesomeIcon icon="envelope" size="sm" className="email-icon"  /> Email
      </button>
      <button href="#" className="linked-btn">
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="sm" className="linked-icon" /> LinkedIn</button>
    </div>
  )
}
