import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CreditsPage () {
  return(
    <div className="Credits">
      <Nav />
      <Header text="Credits"/>
      <main>
      <h1>Works Cited</h1>
      <p>Detimo. “Python Flask: Pros and Cons.” DEV Community, DEV Community, 18 Nov. 2019, dev.to/detimo/python-flask-pros-and-cons-1mlo.</p>
      <p>Inc., SteelKiwi. “Flask vs Django: How to Understand Whether You Need a Hammer or a Toolbox.” Medium, Medium, 4 Oct. 2019, steelkiwi.medium.com/flask-vs-django-how-to-understand-whether-you-need-a-hammer-or-a-toolbox-39b8b3a2e4a5#:~:text=Flask is one of the,Reddit use Flask are numerous.</p>
      <p>“Most Popular Backend Frameworks – 2012/2021 - New Update.” Statistics and Data, 23 June 2021, statisticsanddata.org/data/most-popular-backend-frameworks-2012-2021/.</p>
      <p>“Pros and Cons of ReactJS - Javatpoint.” Www.javatpoint.com, www.javatpoint.com/pros-and-cons-of-react.</p>
      <p>“State of JS 2020.” Front-End Frameworks, 2020.stateofjs.com/en-US/technologies/front-end-frameworks/.</p>
      <p>Vinugayathri. “Top 10 Websites Built on React.js.” Top Remote Indian Talent for US Businesses, Clarion Blog, 24 Aug. 2021, www.clariontech.com/blog/top-10-websites-built-on-react.js?hs_amp=true#.</p>
      <p>Why Developers like Flask.” StackShare, stackshare.io/flask#:~:text=Who uses Flask?&text=1022 companies reportedly use Flask,Netflix, reddit, and Lyft.</p>
      <h1>Contributers</h1>
      <div className="containor">
        <div className="cont-col">
          <p>Mahad Farah</p>
          <p>500783718</p>
          <p>Front End (Header, Sidebar, Nav, Footer, CSS, Icons) Components, Page 1 & 3</p>
        </div>
        <div className="cont-col">
          <p>Ivan Golovine</p>
          <p>500813431</p>
          <p>Backend, Hosting, Deployement, Components, Routing (Page 4)</p>
        </div>
        <div className="cont-col">
          <p>Valareza Arezehgar</p>
          <p>501020437</p>
          <p>Backend, WriteUp, Front-end (Page 3, 4, 5, 6)</p>
        </div>
      </div>
      </main>
      <Footer/>
    </div>
  )
}

export default CreditsPage;