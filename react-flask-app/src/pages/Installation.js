import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function InstallationPage () {
  return(
    <div className="Installation">
      <Nav />
      <Header text="Installation"/>
      <main>
      <h1>Installing React</h1>
      <p>The following tutorial will show you how to install React on any UNIX/Linux based system:</p>
      <ol>
        <li>Open the terminal.</li>
        <li>Run the command: sudo apt-get install node.js/</li>
        <ul>
          <li>When the terminal asks “Do you want to continue [Y/n]?”, enter Y.</li>
        </ul>
        <li>Wait for the computer to finish installing node.js</li>
        <li>cd to a directory where you wish to create the project</li>
        <li>Run the command: npx creat-react-app nameofapp</li>
      </ol>
      <p>By following the steps above, you have created your first React project.</p>
      <h1>Installing Flask</h1>
      <p>The following steps will show you how to install Installation on any UNIX/Linux based system:</p>
      <ol>
        <li>Open terminal.</li>
        <li>cd to a directory where you wish to create the project</li>
        <li>Run the command: mkdir nameOfProj</li>
        <li>Run the command: pip install virtualenv</li>
        <li>Run the command: virtualenv env</li>
        <li>Run the command: touch app.py</li>
        <li>Run the command: source env/bin/activate</li>
        <li>Run the command: pip install Installation</li>
      </ol>
      <p>By following the steps above, you have created your first Installation project.</p>
      Note, once you build these projects, you will not be using your local machine to test them. You will need to follow the same steps to install Installation on servers of your choice.
      </main>
      <Footer/>
    </div>
  )
}

export default InstallationPage;