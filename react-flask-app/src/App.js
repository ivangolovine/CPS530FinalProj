import Home from './pages/Home';
import Credits from './pages/Credits'
import Example from './pages/Example'
import Installation from './pages/Installation'
import Rating from './pages/Rating'
import Tutorial from './pages/Tutorial'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Credits" element={<Credits />} />
        <Route path="/Example" element={<Example />} />
        <Route path="/Installation" element={<Installation />} />
        <Route path="/Ratings" element={<Rating />} />
        <Route path="/Tutorial" element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default App;

/*import React, {useState, useEffect} from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Pass from './components/Pass'
import Clicklogr from './components/Clicklogr';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header text="Flask"/>
      <Pass />
      <Clicklogr text="Sign In"/>
      <Footer />
    </div>
  );
}

export default App;
*/


/*export default App;
<Nav />
<Header text="Flask"/>
<Pass />

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect (() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  return (
        <p> The currect time is {currentTime}.</p>
  );
}

function Ok() {
  const [count, setCount] = useState(0)
  return (
    <div>
      const count: number
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Up</button>
    </div>
  );
}
*/

//export default Ok; 
