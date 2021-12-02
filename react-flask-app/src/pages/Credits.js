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
      <p>“Pros and Cons of ReactJS - Javatpoint.” Www.javatpoint.com, www.javatpoint.com/pros-and-cons-of-react.</p>
      <p>“State of JS 2020.” Front-End Frameworks, 2020.stateofjs.com/en-US/technologies/front-end-frameworks/.</p>
      <p>Vinugayathri. “Top 10 Websites Built on React.js.” Top Remote Indian Talent for US Businesses, Clarion Blog, 24 Aug. 2021, www.clariontech.com/blog/top-10-websites-built-on-react.js?hs_amp=true#.</p>
      </main>
      <Footer/>
    </div>
  )
}

export default CreditsPage;