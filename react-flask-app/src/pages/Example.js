import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Clicklogr from '../components/Clicklogr'

function Example() {
    return(
        <div className="Example">
            <Nav />
            <Header text="Example"/>
            <Clicklogr />
            <Footer />
         </div>
        );
}
export default Example;