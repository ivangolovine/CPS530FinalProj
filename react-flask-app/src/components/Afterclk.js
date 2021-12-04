import { useEffect } from 'react';
import { Form } from './Form';
import {useState} from 'react';

function Afterclk(props) {
    const [submitPass, setPass] = useState('');
    const [submitUN, setUN] = useState('');
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('');
    //used to to know if it should close the signIn
    const [getSubmitted, setSubmitted] = useState(false);

  //updates username
  const updateUN = (UN) => {
    setUN(UN);
  }
  //updates password
  const updatePass = (pass) => {
    setPass(pass);
  }
  //hangles the response from flask
  const handleResponse = (message) => {
    var tempMessage = '';
    var tempURL = '';

    if (message.msg.charAt(0) == 'h') {
      tempURL = message.msg;
    } else {
      tempMessage = message.msg;
    }
    //testing
    setMessage(tempMessage);
    setUrl(tempURL);
    //sends the props message
    props.changeMessage(tempMessage);
    props.changeURL(tempURL);
    props.onCancel();
    props.onClickShowImg();
  }
  //submits the form and call the hangleresponse
  const submitForm = (usrN, pass) => {
    fetch('/api/submit', {
      method: 'POST', body: JSON.stringify({
        pass: submitPass, un: submitUN
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }

    }).then(response => response.json()).then(
      message => handleResponse(message))
    setPass('');
    setUN('');
  }

  useEffect(() => {
    fetch('/api').then(response =>
      response.json().then(data => {
        console.log("hello");
      }));
  }, [])

  

function confirmHandler(){
  props.onConfirm();
}

//gets current Time
  const [currentTime, setCurrentTime] = useState(0);
  useEffect (() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


  return (
    <div className='afterclk'>
      <Form className='btn btn--alt' submitted={getSubmitted} setSubmitted={setSubmitted} uChange={updateUN} passChange={updatePass} submitPass={submitPass} submitUN={submitUN} submitForm={submitForm} />
      <div className='new-line'></div>
      <p> Login Time: {currentTime} </p>
      <div className='new-line'></div>
      <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
    </div>
  );
}
  
  export default Afterclk;

  /* <!-- <button className='btn' onClick={confirmHandler}>Confirm</button> -->*/

  /*
  function sendMessageandURL(){
  return (
    <div>
      <p>{message}</p>
      <img src={url}/>
    </div>
  )
}

function confirmHandler(){
  props.onConfirm();
}
*/