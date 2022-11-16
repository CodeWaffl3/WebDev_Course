import React, {useState} from 'react';
import './App.css';
import Sampler from "./sampler";
import LogIn from "./Login"

function App() {
  function createContent(){
    return (
        <Sampler/>
    )
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  function logMeIn(){
    if (userName === "admin" && password==="password") {
      setIsLoggedIn(true);
    }
  }
  function logOut(){
    setIsLoggedIn(false);
    setUserName("");
    setPassword("");
  }
  function recordName(event){
    setUserName(event.target.value);
  }
  function recordPassWord(event){
    setPassword(event.target.value);
  }
  const filterMask = "M";
  return (
    <div className="App">
        <div>
            {isLoggedIn ? createContent(filterMask) : <LogIn
                handler={logMeIn}
                userNameHandler = {recordName}
                passwordHandler = {recordPassWord}
            />}
            <button onClick={logOut} type="submit">Logout</button>
        </div>
    </div>
  );
}

export default App;
