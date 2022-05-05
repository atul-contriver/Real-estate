import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="site_footer">
  <div className="container">
    <div className="footer_top">
      <div className="row site_name">
        <div className="col-md-6 col-12 column_1">
          <img className="footer_logo" src="assets/images/footer-images/footer-logo.png" alt="realock-logo" />
        </div>
        <div className="col-md-6 col-12 column_2">
          <h5 className="site_contact_us">Contact Us: <a href="mailto:contact@realock.com" target="_blank">contact@realock.com</a>
          </h5>
        </div>
      </div>
    </div>
    <div className="footer_middle">
      <div className="row site_about">
        <div className="col-md-4 col-12 column_1">
          <h4 className="site_about_heading">about</h4>
          <p className="site_about_para">Building mr concers servants in he outlived am breeding. He so
            lain
            good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see
            son
            smart.</p>
          <ul className="site_social_media">
            <li className="social_media_icons">
              <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
              <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
              <a href="https://in.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest-p" /></a>
              <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube" /></a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-12 column_2">
          <div className="row">
            <div className="col-6 left_container">
              <h4 className="offer_menu_heading">offers</h4>
              <ul className="offer_menu">
                <li className="menu_item"><a href="#" className="menu_link">payments</a></li>
                <li className="menu_item"><a href="#" className="menu_link">pricing</a></li>
                <li className="menu_item"><a href="#" className="menu_link">subscriptions</a></li>
                <li className="menu_item"><a href="#" className="menu_link">customers</a></li>
                <li className="menu_item"><a href="#" className="menu_link">privacy site</a></li>
              </ul>
            </div>
            <div className="col-6 right_container">
              <h4 className="company_menu_heading">company</h4>
              <ul className="company_menu">
                <li className="menu_item"><a href="#" className="menu_link">about us</a></li>
                <li className="menu_item"><a href="#" className="menu_link">recent blog</a></li>
                <li className="menu_item"><a href="#" className="menu_link">contact us</a></li>
                <li className="menu_item"><a href="#" className="menu_link">conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 column_3">
          <form action="#" className="newsletter_form">
            <h4 className="form_heading">newsletter</h4>
            <div className="form_container">
              <input type="email" placeholder="Write Your Email" name="mail" required /><button className="form_submit_button" type="submit"><i className="fa-solid fa-paper-plane" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="row site_info">
        <div className="col-xl-8 col-lg-7 col-md-6 col-12 column_1">
          <p className="site_copyright">copyright©<span>realock</span> 2022. <br /> all rights
            reserved.</p>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-12 column_2">
          <a href="#" className="site_policy">privacy policy</a>
          <a href="#" className="site_conditions">terms &amp; conditions</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer