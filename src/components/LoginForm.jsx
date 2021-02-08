import React, { useState } from 'react';
import axios from "axios";

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const authObject = {'Project-ID':'5bdc570f-12cc-45ca-bfab-1e02f89e647b','User-Name':username,'User-Secret':password}

        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});

           localStorage.setItem('username',username);
           localStorage.setItem('password',password);

           window.location.reload();
           setError('');
        }
        catch(err){
            setError('Oops incorrect Credentials.')
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='input' value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                        placeholder='username'
                        required
                    />
                    <input type='text' className='input' value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='password'
                        required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span> Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm
