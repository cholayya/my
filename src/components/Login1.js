import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () =>{
    const [name, setName]=useState('');
    const [pwd, setPwd]=useState('');

    return(
        <div>
        <div>
        <h1>Login</h1>
        <div><input placeholer="email" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)}/></div>
        <div><input placeholer="password" className="joinInput" type="password" onChange={(event)=>setPwd(event.target.value)}/></div>
        <Link onClick={event=>(!name||!pwd)?event.preventDefault():null}to={`/home?name=${name}&pwd=${pwd}`}>
        <button className="button mt-20" type="submit">Log In</button>
        </Link>
        </div>
        </div>

    )
}

export default Login;