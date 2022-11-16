import React from "react";
import './LogIn.css'

function Login(props) {
    return (
        <div>
            <form className="logForm">
                <input className='input' type="text" placeholder="Username"
                       onChange={props.userNameHandler}/>
                <input className='input' type="text" placeholder="Password"
                       onChange={props.passwordHandler}/>
                <button className='input' onClick={props.handler} type="submit">Login</button>
            </form>
        </div>

    )

}

export default Login;