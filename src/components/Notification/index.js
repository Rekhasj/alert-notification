import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification">
      <div className="name-container">{children}</div>
      <GrFormClose className="close" />
    </div>
  )
}

export default Notification
