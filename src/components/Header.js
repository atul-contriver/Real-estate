import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
      <header className="site_header">
        <div className="header_top">
          <div className="container content_header_top">
            <div className="contact_information">
              <div className="column_1">
                <a href="#"><i className="header_top_icons fa-solid fa-square-phone" /></a>
                <a href="tel:+1 234 567 8899" className="header_top_text contact_number">+1 234 567 8899</a>
              </div>
              <div className="column_2">
                <a href="#"><i className="header_top_icons fa-solid fa-envelope" /></a>
                <a href="mailto:contact@realock.com" className="header_top_text contact_mail">contact@realock.com</a>
              </div>
              <div className="column_3">
                <a href="https://www.facebook.com/" target="_blank"><i className="header_top_icons fa-brands fa-facebook-f" /></a>
                <a href="https://twitter.com/" target="_blank"><i className="header_top_icons fa-brands fa-twitter" /></a>
                <a href="https://in.pinterest.com/" target="_blank"><i className="header_top_icons fa-brands fa-pinterest-p" /></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="header_top_icons fa-brands fa-instagram" /></a>
                <a href="https://www.youtube.com/" target="_blank"><i className="header_top_icons fa-brands fa-youtube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main_header">
          <div className="logo">
            <a href="#realock_info"><img src="assets/images/logo/realock-logo.png" alt="realock-logo" /></a> 
          </div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav dp-none">
                <li className="nav-item active dropdown">
                  <a className="nav-link dropdown-toggle" aria-current="page" href="#about_section" id="navbarDropdownMenuLink">home</a>
                  {/* <ul className="dropdown-menu current" aria-labelledby="navbarDropdownMenuLink">
               <li><a className="nav-link" href="homepage_1.html">home-page-1</a></li>
               </ul> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#buyer_seller_section">about</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#category_section">category</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial_section">testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#estimate_section">estimate</a>
                </li>
              </ul>
              <button className="navbar-toggler sidebar_icon desktop" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><i className="fas fa-list" />
              </button>
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar">
                {/* <div className="offcanvas-header">
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div> */}
                <div className="offcanvas-body">
                  <ul className="mobile_sidebar_nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#about_section">home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#buyer_seller_section">about</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#category_section">categories</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial_section">testimonials</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#estimate_section">estimate</a>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </nav>
        </div>
        
      </header>

    </>
  )
}

export default Header