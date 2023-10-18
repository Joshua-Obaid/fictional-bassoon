import React from 'react'
import { Link,NavLink } from 'react-router-dom'

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
import logo from '../assets/images/logo.png'
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


export default function Contact(){
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
   
      
    
    
    
      {/* <!-- contact section --> */}
    
      <section className="contact_section layout_padding">
        <div className="container ">
          <div className="heading_container">
            <h2 className="">
              Contact Us
            </h2>
          </div>
    
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map-responsive">
                  {/* <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600" height="300" frameborder="0" style="border:0; width: 100%; height:100%"
                    allowfullscreen></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* <!-- end contact section --> */}
    
    
    
      {/* <!-- info section --> */}
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
    
      {/* <!-- end info_section --> */}
    
    heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      {/* <!-- footer section --> */}
      <section className="container-fluid footer_section ">
        <div className="container">
          <p>
            &copy; 2019 All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>


      <div className='container flex nav-cont' >
                
               
                <ul className={`flex nav-list`}>
                    
                    <li>
                        <NavLink to='/'  >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='#about'
                           >About</NavLink>
                    </li>
                    <li>
                        <NavLink to='#projects' >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='#contacts' >Contacts</NavLink>
                    </li>
                </ul>
            </div>
      </>
    )
}