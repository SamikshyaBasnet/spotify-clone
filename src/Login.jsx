import React from 'react'
import './Login.css';
import Logo from './images/logo.jpg'
import { loginUrl } from './spotify';
const Login = () => {
    return (
        <div className='login'>
            <img src={Logo}
                alt="spotify" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login