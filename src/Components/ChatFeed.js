import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessages from './TheirMessages';



const ChatFeed = (props) => {

    console.log(props);

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats(activeChat);

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((k, index) => {
            const message = messages[k];
            const lastMessageKey = k === 0 ? null : keys[index - 1];  // check what is last message 
            const isMyMessage = userName === message.sender.userName;    // which user posted last message , if user or other


            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessages message={message} lastMessage={messages[lastMessageKey]}
                                />
                        }
                    </div>
                    <div className="read-reciepts"
                        style={{
                            marginRight: isMyMessage ? '18px' : '0px',
                            marginLeft: isMyMessage ? '0px' : '68px'
                        }}>

                    </div>


                </div>
            );

        });
    }

    return (
     
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title"> {chat?.title}</div>
                <div className="chat-subtitle"></div>
                
             
            </div>

            {renderMessages()}
            <div style={{height:'100px'}}/> 
             {/* to have some gap between render message  */}

             <div className="message-form-container">
             <MessageForm {...props} chatId={activeChat} />
             </div>
        </div>
    )
}

export default ChatFeed