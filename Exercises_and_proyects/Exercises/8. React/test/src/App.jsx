import React, {useState} from 'react';
import './App.css';
import Sampler from "./sampler";
import LogIn from "./Login"
import axios from "axios";

function App() {
  function createContent(){
    return (
        <Sampler/>
    )
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  function logMeIn(event){
    event.preventDefault();
/*    axios
        .get('/login')
        .then(res => {
          var data = res.data;
          if (!data.hasOwnProperty("error")) {
            setIsLoggedIn(true);

          }
        })
        .catch(error => {
      console.log(error.error);
    });*/
      axios
          .post('/login', {user: userName, password: password})
          .then(res => {
              var data = res.data;
              if (!data.hasOwnProperty("error")) {
                  setIsLoggedIn(true);
              }
          })
          .catch(error => {
              console.log(error.error);
    });
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
