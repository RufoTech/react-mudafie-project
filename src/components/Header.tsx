import React, { useRef, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaRegWindowClose,FaFacebook,FaTwitter,FaLinkedin, FaGooglePlusSquare,FaYoutube } from "react-icons/fa";



const Header: React.FC = () => {
  const casusElement = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbariAc = () => {
    if (casusElement.current) {
      casusElement.current.classList.add("aktiv");
    }
    setIsMenuOpen(true);
  };

  const navbariBagla = () => {
    if (casusElement.current) {
      casusElement.current.classList.remove("aktiv");
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sidebar" ref={casusElement}>
        <FaRegWindowClose className='close-icon' onClick={navbariBagla} />

        <div className="mobile-links">
          <ul className='py-5 '>
            <img src="/assets/images/header/logo-light.webp" alt="" className='sidebar-logo ' />
            <p className='text-light py-4'>
              By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.
            </p>
            <div className="company">
              <div className="row">
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
           <div className="sidebar-contact">
           <p className='text-light py-3'>Kyiv | G. Stalingrada Avenue, 6 Vilnius | Antakalnio St. 17</p>
                <h4 className='text-light'>+380(98)298-59-73</h4>
               <a href="mailto:alekberovrufa@gmail.com" className='elaqe-gmail text-light'>alekberovrufa@gmail.com</a>
           </div>
           <div className="sidebar-socialmedia">
            <div className="row ">
              
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.facebook.com/login.php/"><FaFacebook  className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
             <a href="https://x.com/?lang=en"> <FaTwitter className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
             <a href="https://az.linkedin.com/"> <FaLinkedin className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.google.co.uk/"><FaGooglePlusSquare className='text-danger'/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.youtube.com/"><FaYoutube className='text-danger'/></a>


              </div>
            </div>
           </div>
           <div className="copriyght  ">
           <p className='text-light'>© 2019 Homepark | Real Estate & Luxury Homes</p>
           </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="sidebar-mobil">
           <div className="sidebar-mobil-links">
           <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

        
           </div>
        </div>

      <nav className="navbar navbar-expand-lg bg-warning ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/header/logo-light.webp" alt="" className='header-logo ' />
          </a>

          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <div className='contacts d-flex'>
                  <div className="contact-menu align-items-center justify-content-center px-2">
                    <a className="contact text-light" aria-current="page" href="tel:+994997080401">
                      <span>
                        <h5 className='roboto-bold number'>+380(98)298-59-73</h5>
                      </span>
                    </a>
                    <a href='mailto:alekberovrufa@gmail.com' className='mb-0 email'>
                      <h6 className='elaqe-gmail'>alakbarlirufo@gmail.com</h6>
                    </a>
                  </div>
                  <a href=""><img src="/assets/images/header/icon-phone.png" alt="" className='logo-icon' /></a>
                  <div className="language d-flex align-items-center justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link text-light roboto-bold language-en" href="#"><h5 className='language-en'>EN</h5></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light roboto-bold " href="#"><h5 className='language-ua'>UA</h5></a>
                    </li>
                    <button onClick={isMenuOpen ? navbariBagla : navbariAc} className="fabars text-light d-flex align-items-center justify-content-center px-4">
                      {isMenuOpen ? <FaRegWindowClose /> : <CiMenuBurger />}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
