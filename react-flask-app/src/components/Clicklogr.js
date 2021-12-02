import {useState} from 'react';
import Backdrop from './Backdrop';
import Afterclk from './Afterclk';

function Clicklogr(props) {
    const [ getStateSign, changeStateSign] = useState(false);

    function deleteHandler() {
        changeStateSign(true);
    }
    //Component can be named anything with like onCalcel instead of onClick when making ur own
    function closeHandler() {
        changeStateSign(false);
    }

    return (
    <div className='card'>
        <h2>{props.text}</h2> 
        <div className='clicklogr'>
        <button className='btn' onClick={deleteHandler}>Login</button>
        </div>
        { getStateSign && <Afterclk onCancel={closeHandler} onConfirm={closeHandler}/> }
        { getStateSign && <Backdrop onCancel={closeHandler}/> }
    </div>
    );
}

export default Clicklogr;