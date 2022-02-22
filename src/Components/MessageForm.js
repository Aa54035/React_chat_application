import React from 'react';
import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';  // we can also use Material UI 
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const { chatId, cred } = props;

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();

        if (text.length > 0) {
            sendMessage(cred, chatId, { text });
        }
        setValue('');


    };

    const handleUpload = (event) => {
        sendMessage(cred, chatId, { files: event.target.files, text: ' ' });
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input type="text" className="message-input"
                placeholder='Send a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"></PictureOutlined>
                </span>
            </label>

            <input type="file" name="" id="upload-button" multiple={false}
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />

            <button type="submit" className='send-button'>
                <SendOutlined className='send-icon'></SendOutlined>
            </button>



        </form>
    )
}

export default MessageForm