import React from 'react'
import {Alert} from 'reactstrap'

const ChatHeader = props => {
    return(
        <div className = 'Chat-Header'>
            <Alert color='dark'>
                <h2>Chatbot</h2>
            </Alert>
             
        </div>
    )
}

export default ChatHeader