import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity, otherClass}) => {

    const notificationStyles = {
      position: 'absolute',
      top: 100,
      right: 5,
      display: 'flex',
      justifyContext: 'center',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      padding: '10px 20px 10px 20px',
      color: 'white',
    //   backgroundColor: severity === 'success' ? 'green' : 'red',
      borderRadius: '10px'
    }
  
    if(message === '') {
        return null
    }

    const config = true ?
    {
        style: notificationStyles,
        className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}

    return(
      <div {...config}
        // style={notificationStyles} className={`${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`}
        >
        {message}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')
    const [otherClass, setOtherClass] = useState()

    const setNotification = (sev, msg, cls) => {
        setMessage(msg)
        setSeverity(sev)
        setOtherClass(cls)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} otherClass={otherClass}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => {
    return useContext(NotificationContext)
}