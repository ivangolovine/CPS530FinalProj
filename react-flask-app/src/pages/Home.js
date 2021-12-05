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
        <p>For the backend framework, we chose Flask. Flask is well known for its simplicity, and minimal design. Although it learning it can be a challenge to learn, because it is a micro framework, there aren’t any particular tools or libraries that it forces on developers. According to statisticsanddata.org, Flask was the third most popular framework in March 2021.</p>
        <img src="https://i.imgur.com/YneCnoI.png"/>
        <p>Flask has been used for a variety of backend implementations. Because Flask is so minimal, there is a lot of potential for implementation. As a result, it can be used in a variety of fields, ranging from simp[e web applications, to Data Science. </p>
        <p>It is also used by many major companies, such as:</p>
        <ul>
          <li>Netflix</li>
          <li>Reddit</li>
          <li>Lyft</li>
          <li>Trivago</li>
        </ul>
        <p>For developing simple applications, Flask is a very powerful framework. The minimal design of Flask i perfect for beginners who are learning how to use it. It’s simple design also means that it can be altered easily, so that it may best suit your needs. Applications written in Flask are very modular, making them well suited for large projects. The lack of excess modules and libraries will also yield powerful performance. Overall Flask has a wide range of implementations and can perform well in almost any scenario</p>
        <p>With the many advantages, there are also disadvantages to Flask. Because of the lack of excess modules and libraries, more abstract or complex applications will either require a lot of extra code, or third party modules. Third party modules are not ideal because they may be poorly coded, or be a security risk. Generally, the modular and low-level design of Flask applications will also mean that more complex projects will be difficult to read. Developers joining ongoing Flask projects may take more time understanding how the application works, which can slow down the development process.</p>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;