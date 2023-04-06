import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cata-div">
          <p className="para-cata">Contact Us</p>
          <p className="para1_offoo">Let us help!</p>
          <p className="para1_off11">
            If you're unsure about what type of training will work best for you,
            just tell us a little more about
            <br /> your needs. We will get back to you as soon as possible with
            the answers you need!
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactUs
