import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TutorialPage () {
  return(
    <div className="Tutorial">
      <Nav />
      <Header text="Tutorial"/>
      <main>
        <p>Using the two frameworks, we are going to develop a simple login page. We will use React to create the form that evaluates for the user’s username and password, and send a POST request to the back end server, managed by Flask. We will use Flask to handle the POST request, evaluate if username and password are correct, and send a meaningful message back to the frontend. </p>
        <h1>Flask</h1>
        <ol>
          <li>Open main.py</li>
          <li>Copy the following lines of code into your file</li>
          <img src = "https://i.imgur.com/efoqhau.png"/>
          <p>The first line above imports the Flask libraries. We then have access to the app.route decorator that takes in a string parameter representing a directory and allows us to link our function to that directory. Every time, a post or get request is made to that directory, our function will run its code. Finally, we run the app if the current file is the python file that is being run.</p>
          <li>Import the json and request libraries from Flask. These will help us receive POST requests and read the json data within them.</li>
          <img src="https://i.imgur.com/tr4Jwc9.png"/>
          <li>Alter your main function by adding the following line before the return:</li>
          <img src="https://i.imgur.com/mRiZ6CE.png"/>
          <p>This reads the json data sent in and stores it inside a dictionary, held in the variable request_data. Finally, after we have received data, we want to check username and password from the dictionary. </p>
          <li>Finalize your main.py file like so:</li>
          <img src="https://i.imgur.com/F3CaOf1.png"/>
        </ol>
        <h1>React</h1>
        <p>We can use react to build an attractive frontend design for our webpage. First, we will use  the react project that we have created.</p>
        <ol>
          <li>Open the src folder stored inside your React project folder.</li>
          <li>Open App.js and empty the div inside the App() function, so that just the div tag remains.</li>
          <p>The function App exports our main app to the website. Any JSX tags that we place inside the return statement will combine to form the website. React breaks down a website into components. We will be creating a component called Form.</p>
          <li>Add the following code into App.js:</li>
          <img src="https://i.imgur.com/7kk4dg5.png"/>
          <p>Here, we first import our stylesheet which you can populate to make your form more attractive. The next import is a component that we will write called Form. This will contain information about our Form, which will ask for password and username. The last import is useState, which is a package from React that will allow us to modify variables on the screen in real time.</p>
          <p>Inside the main app function,which will be exported to run our final app,we declare to useState varoables: one for the username and one for password. We also need a message useState variable, so that we can output something different for each response from the server.</p>
          <p>The next few functions we need will be two functions that set the current state of our username and password useStates. These will be called updateUN and updatePass. We will also need a function to update our message, called handleMessage. This will be used to take the message from the server and set it to the useState variable that we are using to store our message.</p>
          <p>We then need a function that handles the submission of the form to the backend. The function submitForm will send a POST request to the server, with the route that we defined in our previous python code, and will receive a response formatted as a json. We unpack the json, store it in a variable called message, and then call our handleMessage function, which will update the final message.</p>
          <p>Finally, in our return statement, all we need is a form, as well as the message that we have received. We will make a tag that contains our Form component, and we will pass the useState variables, as well as the submitForm function, as props. Below this, we have a &lt;p{'>'} tag that will print our message.</p>
          <li>Create a folder called components</li>
          <li>Inside the components folder, create a file called Form.js</li>
          <li>Copy the following code into Form.js</li>
          <img src="https://i.imgur.com/Xpt6vEH.png"/>
          <p>First we define the function Form to be returned every time the component is requested. This function will take the components, uChange, passChange, submitForm, submitUN and submitPass. Inside, we define onSubmit, handleUChange and handlePChange which both take in events, a result of the user interacting with the app. The function onSubmit prevents default behaviour of whatever is calling it and instead runs the function submitForm which was passed in as a component.</p>
          <p>The functions handleUChange and handlePChange update the values with passChange and uChange. Finally, we have the main return, which returns a form that applies all of our values. We used the type password for the input so that it does not display the password. We can also use the attribute placeholder for both to prompt the user with ideas on what to enter. Both these attributes can help create a more attractive web page.</p>
        </ol>
        <h2>Styling the Login Page</h2>
        <p>We can use CSS to format and color this page in any form we wish. The most important thing is to import your chosen CSS file into your App.js file. You may use the following line at the top of the file: <code>import './index.css';</code> </p>
        <p>This will then open index.css for your App.css. Since it is the final destination, you only need to import it here.</p>
        <p>We will be transforming the base Form that we have implemented (shown below)  into something more desirable.</p>
        <img src="https://i.imgur.com/QD5RJzZ.png"/>
        <h2>Add sufficient, but not excessive color</h2>
        <p>Color is a great way to make your web page appealing; however too much color will be distracting. For the simple page that we have built, stick to 2 or 3 colors.</p>
        <h2>Separate different sections</h2>
        <p>There are various strategies that you can use to separate your sections effectively. This is important so that the information on your page is well organized. The layout of the page is very important. To help with layout you may incorporate borders, headings, and new lines.</p>
        <h2>Make it fun</h2>
        <p>Adding a personality to the website is an effective way of making it entertaining. It could be as simple as adding a picture in some places. Just remember that if you are adding images, you must make sure that they are interactive, so that their size change with the size of the window. </p>
        <h2>Anticipate the needs of your users</h2>
        <p>Anticipating the needs of the user can help your web page build a positive personality, and ultimately a better experience. You can also add attributes like placeholder and autofocus so that the form provides helpful information and directs users through your web page.</p>
        <img src="https://i.imgur.com/rpW1W1M.png"/>
        <p>You will find our final example on the next page.</p>
      </main>
      <Footer/>
    </div>
  )
}

export default TutorialPage;