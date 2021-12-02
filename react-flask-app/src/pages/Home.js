import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage () {
  return(
    <div className="Home">
      <Nav />
      <Header text="Home"/>
      <main>
        <h1>React</h1>
        <p>We built this website with React.JS as our front end framework. According to the State of JavaScript survey, created and maintained by Sacha Greif, React has been the most popular front end framework for the last 5 years. </p>
        <img src="https://i.imgur.com/xZxF3ZU.png" />
        <p>It consistently leads the pack in terms of satisfaction and awareness as well. But what kind of websites are built with it?</p>
        <p>React was first developed by Jordan Walke, a software engineer at Facebook. Thus, it is obvious that React is used by both Facebook and Instagram to develop major sections of their respective websites. Some other popular websites that use React include:</p>
        <ul>
          <li>Netflix</li>
          <li>New York Times</li>
          <li>Yahoo Mail</li>
          <li>Code Academy</li>
        </ul>
        <p>React has great tools for building a front end  website. It structures its webpages as components, so different components can be reused easily. Its simple integration with JavaScript provides developers with freedom to build whatever they want. The project structure in React is also straightforward and easy to implement.</p>
        <p>With all of its benefits, React also has some disadvantages. The major negative of React is the compulsory learning curve. Although integrating your ideas is simple in React, learning the framework can prove to be quite challenging. It has subpar documentation so extensive research is required to learn the framework. React also uses a language extension called JSX. This extension may seem similar to HTML, but there are many differences in the tags and attributes that you are allowed to use. Thus, it is important to learn JSX when developing a React web application.</p>
        <h1>Flask</h1>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;