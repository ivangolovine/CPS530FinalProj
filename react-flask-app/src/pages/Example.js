import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Clicklogr from '../components/Clicklogr'

function Example() {
    return(
        <div className="App">
            <Nav />
            <Header text="Flask"/>
            <Clicklogr />
            <Footer />
         </div>
        );
}
export default Example;