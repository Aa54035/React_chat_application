import React from 'react'

// : <TheirMessages message={message} lastMessage={messages[lastMessageKey]}

const TheirMessages = ({ message, lastmessage }) => {


    const isFirstMessageByUser = !lastmessage || lastmessage.sender.username !== message.sender.username;
    //consider as first message by user , first message by user or not 

    return (

        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}


            {message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src={message.attachment[0].file}
                        alt="message-attachment"
                        className='message-image'
                        style={{
                            float: 'right',
                            marginLeft: isFirstMessageByUser ? '4px' : '48px'
                        }}
                    />
                )
                : (
                    <div className="messages"
                        style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b5A20' }}>
                        {message.text}
                    </div>
                )
            }







        </div>
    );
}

export default TheirMessages