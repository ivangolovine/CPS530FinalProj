import { Link } from 'react-router-dom'

function Footer(){
  return(
    <footer>
      <div className="col">
        <p>Explore</p>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Installation'>Flask</Link></li>
        <li><Link to='/Tutorial'>Tutorial</Link></li>
        <li><Link to='/Example'>Example</Link></li>
        <li><Link to='/Rating'>Rating</Link></li>
        <li><Link to='/Credits'>Credits</Link></li>
      </ul>
      </div>
      <div className="col">
        <p>Contributers</p>
        <ul>
          <li>Mahad</li> 
          <a href="https://github.com/MahadF-cs" target="_blank"><img src="images/icon_github.png"/></a>
          <a href="https://www.linkedin.com/in/mahad-farah-8a1584204/" target="_blank"><img src="images/icon_linkedin.png"/></a>
          <br/>
          <li>Ivan</li> 
          <a href="https://github.com/ivangolovine" target="_blank"><img src="images/icon_github.png"/></a>
          <a href="https://www.linkedin.com/in/ivan-golovine-76215a9b/" target="_blank"><img src="images/icon_linkedin.png"/></a>
          <br/>
          <li>Alar</li> 
          <a href="#"><img src="images/icon_github.png"/></a> 
          <a href="#"><img src="images/icon_linkedin.png"/></a>
        </ul>
      </div>
      <div className="col">
      <a href="https://www.cs.ryerson.ca/~cps530/" target="_blank"><img className="ryerson_footer" src="images/ryerson_icon_large.png"/></a>
      </div>
    </footer>
  );
}

export default Footer;