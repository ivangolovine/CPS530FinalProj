import { Link } from 'react-router-dom'

function Nav() {
  return(
    <nav>
      <a href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img src="images/ryerson_icon_small.png"/></a>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Installation'>Installation</Link></li>
        <li><Link to='/Tutorial'>Tutorial</Link></li>
        <li><Link to='/Example'>Example</Link></li>
        <li><Link to='/Rating'>Rating</Link></li>
        <li><Link to='/Credits'>Credits</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;


/*
function Nav() {
  return(
    <nav>
      <a href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img src="images/ryerson_icon_small.png"/></a>
      <ul>
        <li>Home</li>
        <li><a href="http://localhost:3000/FlaskPage">Flask</a></li>
        <li>Tutorial</li>
        <li>Example</li>
        <li>Rating</li>
        <li>Credits</li>
      </ul>
    </nav>
  );
}

*/