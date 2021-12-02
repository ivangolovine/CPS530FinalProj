import { useEffect } from 'react';
import { Form } from './Form';
import { useState } from 'react';

function Login() {
  const [submitPass, setPass] = useState('');
  const [submitUN, setUN] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');

  const updateUN = (UN) => {
    setUN(UN);
  }

  const updatePass = (pass) => {
    setPass(pass);
  }

  const handleResponse = (message) => {
    var tempMessage = '';
    var tempURL = '';

    if (message.msg.charAt(0) == 'h') {
      tempURL = message.msg;
    } else {
      tempMessage = message.msg;
    }

    setMessage(tempMessage);
    setUrl(tempURL);

  }

  const submitForm = (usrN, pass) => {

    fetch('/api/submit', {
      method: 'POST', body: JSON.stringify({
        pass: submitPass, un: submitUN
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    }).then(response => response.json()).then(message => handleResponse(message))

    setPass('');
    setUN('');
  }

  useEffect(() => {
    fetch('/api').then(response =>
      response.json().then(data => {
        console.log("hello");
      }));
  }, [])


  return (
    <div className="Login">
      <>
        <Form uChange={updateUN} passChange={updatePass} submitPass={submitPass} submitUN={submitUN} submitForm={submitForm} />
        <p>{message}</p>
        <img src={url}/>
      </>
    </div>
  );
}

export default Login;





/*import React, {useState, useEffect} from 'react';

function Timer(){
    const [currentTime, setCurrentTime] = useState(0);
  useEffect (() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
    return (
            <p className = "times"> The currect time is {currentTime}.</p>
        );
}
    
export default Timer;*/