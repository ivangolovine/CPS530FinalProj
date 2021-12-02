import { useEffect } from 'react';
import { Form } from './Form';
import {useState} from 'react';

function Afterclk(props) {
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

//gets current Time
  const [currentTime, setCurrentTime] = useState(0);
  useEffect (() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

    return (
      <div className='afterclk'>
        <Form uChange={updateUN} passChange={updatePass} submitPass={submitPass} submitUN={submitUN} submitForm={submitForm} />
        <p>{message}</p>
        <p> Login Time: {currentTime}.</p>
        <img src={url}/>
        <div ckassName='new-line'></div>
        <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
      </div>
    );
  }
  
  export default Afterclk;

  /* <!-- <button className='btn' onClick={confirmHandler}>Confirm</button> -->*/