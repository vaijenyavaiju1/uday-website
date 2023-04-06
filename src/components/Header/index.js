import './index.css'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="nav-off">
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="hamburger-btn">
                <GiHamburgerMenu size={25} className="hamburger" />
              </button>
            }
          >
            {close => (
              <div className="modal-container">
                <div className="nav-link-container">
                  <Link to="/" className="nav-link">
                    <p className="nav-menu-item">Home</p>
                  </Link>
                  <Link to="/services" className="nav-link">
                    <p className="nav-menu-item">Services</p>
                  </Link>
                  <Link to="/contactUs" className="nav-link">
                    <p className="nav-menu-item">Contact Us</p>
                  </Link>
                </div>

                <button type="button" className="close-btn">
                  <AiOutlineCloseCircle size={18} onClick={() => close()} />
                </button>
              </div>
            )}
          </Popup>
        </div>
        <div className="div">
          <div className="divOff">
            <Link to="/" className="head">
              {' '}
              Home{' '}
            </Link>{' '}
            <Link to="/services" className="head">
              {' '}
              Services{' '}
            </Link>{' '}
          </div>{' '}
          <div>
            <Link to="/" className="headOneoff">
              Skillprowise
              <br /> Training Academy{' '}
            </Link>
          </div>
          <Link to="/contactUs" className="head">
            {' '}
            Contact us{' '}
          </Link>{' '}
        </div>{' '}
      </nav>
    )
  }
}

export default Header
