import React from 'react'

import aboutImg from '../assets/images/about-img.png'
import arrowGreen from '../assets/images/arrow-green.png'
import arrow from '../assets/images/arrow.png'
import client1 from '../assets/images/client-1.png'
import client2 from '../assets/images/client-2.png'
import discountImg from '../assets/images/discount-img.png'
import envelopeWhite from '../assets/images/envelope-white.png'
import fb from '../assets/images/fb.png'
import heroBg from '../assets/images/hero-bg.jpg'
import heroSideBg from '../assets/images/hero-side-bg.png'
import i1 from '../assets/images/i-1.jpg'
import i2 from '../assets/images/i-2.jpg'
import i3 from '../assets/images/i-3.jpg'
import i4 from '../assets/images/i-4.jpg'
import i5 from '../assets/images/i-5.jpg'
import i6 from '../assets/images/i-6.jpg'
import linkedin from '../assets/images/linkedin.png'
import locationWhite from '../assets/images/location-white.png'
import location from '../assets/images/location.png'
import logo from '../assets/images/Logo.png'
import mail from '../assets/images/mail.png' 
import menu from '../assets/images/menu.png'
import phone from '../assets/images/phone.png'
import play from '../assets/images/play.png'
import searchIcon from '../assets/images/search-icon.png'
import sliderImg from '../assets/images/slider-img.png'
import t1 from '../assets/images/t-1.jpg'
import t2 from '../assets/images/t-2.jpg'
import t3 from '../assets/images/t-3.jpg'
import t4 from '../assets/images/t-4.jpg'
import telephoneWhite from '../assets/images/telephone-white.png'
import twitter from '../assets/images/twitter.png'
import user from '../assets/images/user.png'
import youtube from '../assets/images/youtube.png'

import { Link,NavLink } from 'react-router-dom'

export default function Furniture(){
    return(
        <>
        <div className="hero_area">
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to='/'>
            <img src={logo} alt="" />
          </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
             
             
    
            </nav>
          </div>
          <div className='container flex nav-cont' >
                
               
                <ul className={`flex nav-list`}>
                    
                    <li>
                        <NavLink to='/'  >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                           >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' >Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' >Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/furniture' >Furniture</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        {/* <!-- end header section --> */}
      </div>
  {/* <div className="hero_area">
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
        <Link className="navbar-brand" to='/'>
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">Shop </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="furniture.html"> Furniture </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact us</a>
              </li>
            </ul>
            <div className="user_option">
              <a href="">
                <img src={user} alt=""/>
                <span>
                  Login
                </span>
              </a>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
          <div>
            <div className="custom_menu-btn ">
              <button>
                <span className=" s-1">

                </span>
                <span className="s-2">

                </span>
                <span className="s-3">

                </span>
              </button>
            </div>
          </div>

        </nav>
      </div>
    </header>

  </div> */}


  <section className="trending_section layout_padding">
    <div id="accordion">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Trending Categories
                </h2>
              </div>
              <div className="tab_container">
                <div className="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
                  <div className="number">
                    <h5>
                      01
                    </h5>
                  </div>
                  <hr/>
                  <div className="t-name">
                    <h5>
                      Chairs
                    </h5>
                  </div>
                </div>
                <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
                  <div className="number">
                    <h5>
                      02
                    </h5>
                  </div>
                  <hr/>
                  <div className="t-name">
                    <h5>
                      Tables
                    </h5>
                  </div>
                </div>
                <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  <div className="number">
                    <h5>
                      03
                    </h5>
                  </div>
                  <hr/>
                  <div className="t-name">
                    <h5>
                      Bads
                    </h5>
                  </div>
                </div>
                <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour">
                  <div className="number">
                    <h5>
                      04
                    </h5>
                  </div>
                  <hr/>
                  <div className="t-name">
                    <h5>
                      Furnitures
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src={t1} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t2} alt=""/>
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src={t3} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t4} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src={t3}alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t4} alt=""/>
                  </div>
                </div>
                <div className="box b-2">

                  <div className="img-box">
                    <img src={t1} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t2} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src={t4} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t1} alt=""/>
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src={t3} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t2} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src={t1} alt=""/>
                  </div>

                  <div className="img-box">
                    <img src={t4} alt=""/>
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src={t3} alt=""/>
                  </div>
                  <div className="img-box">
                    <img src={t2} alt=""/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </section>

   {/* end trending section  */}


   {/* info section  */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_logo">
        <h2>
          Digitf
        </h2>
      </div>
      <div className="row">

        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src={locationWhite} width="18px" alt=""/>
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src={telephoneWhite} width="12px" alt=""/>
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src={envelopeWhite} width="18px" alt=""/>
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div>
                <a href="">
                  <div className="insta-box b-1">
                <img src={i1} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-2">
                    <img src={i2} alt=""/>
                  </div>
                </a>
              </div>

              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src={i3} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src={i4} alt=""/>
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src={i5} alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src={i6} alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href="">
                <img src={fb} alt=""/>
              </a>
              <a href="">
                <img src={twitter} alt=""/>
              </a>
              <a href="">
                <img src={linkedin} alt=""/>
              </a>
              <a href="">
                <img src={youtube} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   {/* end info_section  */}


   {/* footer section  */}
  <section className="container-fluid footer_section ">
    <div className="container">
      <p>
        &copy; 2019 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
   end  footer section 

        </>
    )
}