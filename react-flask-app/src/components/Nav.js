import { Link } from "react-router-dom";

function Nav() {
  return(
    <nav>
      <a href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img src="https://i.imgur.com/FZh2skv.png"/></a>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/Installation"><li>Installation</li></Link>
        <Link to="/tutorial"><li>Tutorial</li></Link>
        <Link to="/example"><li>Example</li></Link>
        <Link to="/ratings"><li>Rating</li></Link>
        <Link to="/credits"><li>Credits</li></Link>
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