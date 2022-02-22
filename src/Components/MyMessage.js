import React from 'react'

const MyMessage = ({ message }) => {

    if (message.attachments && message.attachments.length > 0) {
        return (<img src={message.attachment[0].file}
            alt="message-attachment"
            className='message-image'
            style={{ float: 'right' }}
        />);
    }

    return (
        <div>
            <div className="messages" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b5A20' }}>
                {message.text}
            </div>

        </div>
    )
}

export default MyMessage