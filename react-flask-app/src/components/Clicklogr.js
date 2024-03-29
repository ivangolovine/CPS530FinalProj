import {useState} from 'react';
import Backdrop from './Backdrop';
import Afterclk from './Afterclk';
function Clicklogr(props) {
    const [ getStateSign, changeStateSign] = useState(false);
    
    const [ getMessage, changeMessage ] = useState('cheers loves');
    const [ getURL, changeURL ] = useState('');
    const [ getGifURL, changeGifURL] = useState('');

    //hide or show the img/msg
    const [ getImgSign, changImgSign] = useState(false);

    function showImgHangler() {
        changImgSign(true);
    }
    //Component can be named anything with like onCalcel instead of onClick when making ur own
    function hideImgHangler() {
        changImgSign(false);
    }

    function showHandler() {
        changeStateSign(true);
    }
    //Component can be named anything with like onCalcel instead of onClick when making ur own
    function hideHandler() {
        changeStateSign(false);
    }

    const Results = () => (
        <div>
        <div className="parentDiv">
            <p>{getMessage} </p>
            <img src={getGifURL}/>
        </div>
        <div className="parentDiv">
            <img src={getURL}/>
        </div>
        </div>
      )
    
    return (
    <>
    <div id="changeBoxBack">
    <div className='card'>
        <h2>{props.text}</h2> 
        <div className='clicklogr'>
            <button className='btn' onClick={showHandler}>Login</button>
        </div>
        <div>
            { getStateSign && <Afterclk onCancel={hideHandler} onConfirm={hideHandler} changeURL={changeURL} changeMessage={changeMessage} changeGifURL={changeGifURL} onClickShowImg={showImgHangler}/> }
            { getStateSign && <Backdrop onCancel={hideHandler}/> }
        </div>
    </div>
    </div>
    { getImgSign ? <Results/> : null }
    </>
    );
}

export default Clicklogr;

/* eturn (
    <div className='card'>
        <p>{getMessage} </p>
        <img src={getURL}/>
        <h2>{props.text}</h2> 
        <div className='clicklogr'>
        <button className='btn' onClick={showHandler}>Login</button>
        </div>
        { getStateSign && <Afterclk onCancel={hideHandler} onConfirm={hideHandler} changeURL={changeURL} changeMessage={changeMessage}/> }
        { getStateSign && <Backdrop onCancel={hideHandler}/> }
    </div>
    );
}
*/