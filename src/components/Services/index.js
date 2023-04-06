import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Services extends Component {
  render() {
    return (
      <div className="footer-va">
        <Header />
        <div className="cata-div">
          <p className="para-cata">Course Catalog</p>
          <p className="para1_off">Click on a file to download.</p>
          <p className="para1_off">Files coming soon.</p>
        </div>
        <div className="oneCnOff">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Services
