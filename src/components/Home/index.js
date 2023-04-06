import './index.css'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Popup from 'reactjs-popup'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

class Home extends Component {
  state = {
    showMessage: false,
  }

  render() {
    const {showMessage} = this.state

    return (
      <div className="canIm">
        <div className="bg-can">
          <div className="home">
            <div className="nav">
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
                        <AiOutlineCloseCircle
                          size={18}
                          onClick={() => close()}
                        />
                      </button>
                    </div>
                  )}
                </Popup>
              </div>

              <div className="div">
                <div className="divOff">
                  <Link to="/" className="head">
                    Home
                  </Link>
                  <Link to="/services" className="head">
                    Services
                  </Link>
                </div>
                <Link to="/" className="headOne">
                  Skillprowise <br /> Training Academy{' '}
                </Link>{' '}
                <Link to="/contactUs" className="head">
                  Contact us
                </Link>
              </div>
            </div>{' '}
            <div className="contact">
              <h1 className="heading"> Tools To Help You Succeed </h1>{' '}
              <p className="paraOffer">
                Offering in -depth training for your team!{' '}
              </p>{' '}
              <Link className="linkOff" to="/contactUs">
                <button type="button" className="contactButton">
                  Contact us{' '}
                </button>{' '}
              </Link>
            </div>{' '}
          </div>{' '}
          <div>
            <p className="about"> About Us </p>{' '}
            <div className="whole-con">
              <img
                className="image"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680521167/one_f1tsum.webp"
              />
              <div className="con-div">
                <p className="convi"> Convenient Training </p>{' '}
                <p className="con-para">
                  Whether you want to hold in -person seminars for new staff or
                  hold online training sessions, we have you covered.We can work
                  with your and your staff on - site or virtually to ensure the
                  best learning environment for your team.
                </p>
              </div>
            </div>
            <div className="whole-con">
              <div className="con-div">
                <p className="convi"> Highly Qualified Educators </p>{' '}
                <p className="con-para">
                  We know that learning is easier when you have an excellent
                  teacher. That's why most of our educators have achieved an
                  advanced degree in their field. Our instructors are passionate
                  about the subjects they teach and bring this enthusiasm into
                  their seminars and courses.
                </p>{' '}
              </div>{' '}
              <img
                className="image"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680589358/one_1_rl7krs.webp"
              />
            </div>
            <div className="whole-con">
              <img
                className="image"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680589381/one_2_z7uiqq.webp"
              />
              <div className="con-div">
                <p className="convi"> Wide Variety of Courses </p>{' '}
                <p className="con-para">
                  Wide Variety of Courses Whether you're looking for technical
                  training, a best practice seminar, or a management course, we
                  can help. All of our courses are customizable for your needs
                  to make sure you leave with relevant skills.
                </p>
              </div>
            </div>
            <div className="whole-con1">
              <img
                className="image2"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680521167/one_f1tsum.webp"
              />
              <div className="con-div1">
                <p className="convi1"> Convenient Training </p>{' '}
                <p className="con-para1">
                  Whether you want to hold in -person seminars for new staff or
                  hold online training sessions, we have you covered.We can work
                  with your and your staff on - site or virtually to ensure the
                  best learning environment for your team.
                </p>
              </div>
            </div>
            <div className="whole-con1">
              <img
                className="image2"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680589358/one_1_rl7krs.webp"
              />
              <div className="con-div1">
                <p className="convi1"> Highly Qualified Educators </p>{' '}
                <p className="con-para1">
                  We know that learning is easier when you have an excellent
                  teacher. That's why most of our educators have achieved an
                  advanced degree in their field. Our instructors are passionate
                  about the subjects they teach and bring this enthusiasm into
                  their seminars and courses.
                </p>{' '}
              </div>{' '}
            </div>
            <div className="whole-con1">
              <img
                className="image2"
                alt="one"
                src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1680589381/one_2_z7uiqq.webp"
              />
              <div className="con-div1">
                <p className="convi1"> Wide Variety of Courses </p>{' '}
                <p className="con-para1">
                  Wide Variety of Courses Whether you're looking for technical
                  training, a best practice seminar, or a management course, we
                  can help. All of our courses are customizable for your needs
                  to make sure you leave with relevant skills.
                </p>
              </div>
            </div>
          </div>
          <div className="image-con">
            <h1 className="image-head">Reviews</h1>
            <div className="image-div">
              <p className="image-para">Reviews coming soon!</p>
            </div>
          </div>
          <p className="blog">My Blog</p>
          {showMessage ? (
            <div className="products-loader-container">
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
          ) : (
            <div>
              <p className="blog-name">Posts Coming soon</p>
            </div>
          )}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
