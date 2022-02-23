import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const projectID = "aec87bbf-4bf4-4684-a567-50f3dbf20e31";

const LoginForm = () => {


    const [userName, setUseName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': 'userName', 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // we will store them in localhost storage 

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            //once storedin local storage then we have to re load , we have to reload chat feed window
            window.location.reload();
            setError('');

            <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
                <div class="toast-header">
                    <strong class="mr-auto">Error </strong>
                    <small>11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    Correct passowrd ,Login Successfull !!!
                </div>
            </div>


        } catch (error) {
            setError('ops,Incorrect password ');

            <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="false">
                <div class="toast-header">
                         <strong class="mr-auto">Error </strong>
                        <small>11 mins ago</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="toast-body">
                    ops,Incorrect password!!!
                </div>
            </div>

        }

    }

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" 
                        className="input"
                        placeholder="UserName"

                        onChange={(e) => {
                            setUseName(e.target.value)
                        }}
                        required

                    />
                    <input type="password" name="" id=""
                        className="input"
                        placeholder="Password"

                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required

                    />
                    <div align='center'>
                        <button className="button">

                            <span>Start Chatting</span>

                        </button>
                    </div>

                </form>
                <h1>{error}</h1>

            </div>

        </div>
    )
}

export default LoginForm