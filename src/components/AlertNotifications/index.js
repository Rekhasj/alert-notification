import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success" />
      <div className="notification-card ">
        <h1 className="notification-heading success">Success</h1>
        <p className="notification-details">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="error" />
      <div className="notification-card ">
        <h1 className="notification-heading error">Error</h1>
        <p className="notification-details">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="warning" />
      <div className="notification-card ">
        <h1 className="notification-heading warning">Warning</h1>
        <p className="notification-details">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo className="info" />
      <div className="notification-card ">
        <h1 className="notification-heading info">Info</h1>
        <p className="notification-details">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notification-container">
      <h1 className="alert-heading">Alert Notifications</h1>
      {renderSuccess()}
      {renderError()}
      {renderWarning()}
      {renderInfo()}
    </div>
  )
}

export default AlertNotifications
