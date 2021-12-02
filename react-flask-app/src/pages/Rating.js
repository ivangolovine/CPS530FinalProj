import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RatingsPage () {
  return(
    <div className="Ratings">
      <Nav />
      <Header text="Ratings"/>
      <main>
      <p>Reach and Flask are both widely used frameworks for web development. As beginners, we wanted to choose frameworks that had a lot of support on the internet so that it would be simple to find educational sources.  We chose React because of its reputation, and Flask because it used Python. At first glance, these libraries seemed like the optimal choice for minimizing the challenges we faced. However, upon beginning development and research, we quickly realized that there would be a large learning curve.</p>
      <p>Reach and Flask are both widely used frameworks for web development. As beginners, we wanted to choose frameworks that had a lot of support on the internet so that it would be simple to find educational sources.  We chose React because of its reputation, and Flask because it used Python. At first glance, these libraries seemed like the optimal choice for minimizing the challenges we faced. However, upon beginning development and research, we quickly realized that there would be a large learning curve.</p>
      <p>The simplest summation for the reason that React had a larger learning curve is that it involved learning way more elements. To develop in React, we needed JavaScript, JSX, React’s project structure and React’s libraries, all of which were new to us. React was entirely developed using JavaScript, so we needed to learn an entire programming language, as well as the way it collaborates with HTML. After we had a strong basis for JavaScript, we needed to learn React, which was not simple either. We had to learn JSX for the specific tags that we wanted to use, and then learn the many features that the React libraries brought. Certain methods of solving problems without the appropriate React implementation did not work, even though the logic behind them was sound. The framework required us to learn its structure, functions and how it works for any implementation. As a result, developing with React proved to be more challenging than any of the other tools that we have studies throughout the semester.</p>
      <p>Although both frameworks were challenging to learn, the development process was enjoyable. React and Flask are both smooth and efficient frameworks. After we overcame the learning curve, we were able to implement our ideas properly. Development became smooth and efficient, and we were able to communicate and understand each other’s ideas effectively. In retrospect, we are glad that we chose these frameworks. They are both widely used so they were useful to learn. This brief introduction was a great first experience and after we managed to learn them, the frameworks provided us with a positive experience.</p> 
      </main>
      <Footer/>
    </div>
  )
}

export default RatingsPage;