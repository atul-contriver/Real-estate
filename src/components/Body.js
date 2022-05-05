import React from 'react'

const Body = () => {
  return (
    <>
       <div>
  {/* Realock information section starts */}
  <section id="realock_info">
    <div className="container content_info">
      <div className="row">
        <div className="col-lg-6 col-md-12 info_heading">
          <h1>find your best smart real estate</h1>
        </div>
        <div className="col-lg-6 col-md-12 para_info">
          <p><span> Lorem ipsum dolor sit amet,</span> consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Realock Information section ends */}
  {/* Slider section starts */}
  <section id="image_slider_section">
    <div className="container">
      <div className="realock_form_content">
        <form className="search_form_realock" action="#" method="GET">
          <div className="city_icon">
            <div className="svg_icon">
              <i className="fa-solid fa-city" />
            </div>
          </div>
          <div className="realock_form_placeholder">
            <input className="form_placeholder" type="text" placeholder="Search for city, neighorhood, agent, address..." />
          </div>
          <div className="filter_icon">
            <div className="svg_icon">
              <i className="fa-solid fa-sliders" />
            </div>
          </div>
          <div className="realock_form_button">
            <input className="form_submit_button" type="submit" name="submit" defaultValue="search" />
          </div>
        </form>
      </div>
      <div className="image_slider">
        <div className="slide image_1">
          <img src="assets/images/image-gallery/image-1.png" alt="" />
        </div>
        <div className="slide image_2">
          <img src="assets/images/image-gallery/image-2.png" />
        </div>
        <div className="slide image_3">
          <img src="assets/images/image-gallery/image-3.png" />
        </div>
        <div className="slide image_4">
          <img src="assets/images/image-gallery/image-4.png" />
        </div>
        <div className="slide image_5">
          <img src="assets/images/image-gallery/image-5.png" />
        </div>
        <div className="slide image_6">
          <img src="assets/images/image-gallery/image-6.png" />
        </div>
        <div className="slide image_7">
          <img src="assets/images/image-gallery/image-7.png" />
        </div>
        <div className="slide image_8">
          <img src="assets/images/image-gallery/image-8.png" />
        </div>
        <div className="slide image_9">
          <img src="assets/images/image-gallery/image-9.png" />
        </div>
        <div className="slide image_10">
          <img src="assets/images/image-gallery/image-10.png" />
        </div>
      </div>
    </div>
  </section>
  {/* Slider section ends */}
  {/* About section start */}
  <section id="about_section">
    <div className="bg_img_about">
      <div className="container">
        <div className="col-md-6 col-12 about_house_info ">
          <div className="title_about">
            <h5>open houses</h5>
          </div>
          <div className="heading_about">
            <h2>Attend a virtual open house.</h2>
          </div>
          <div className="para_about">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
          <div className="about_button">
            <a href="#" className="btn">schedule now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About section ends */}
  {/* Property listing section starts*/}
  <section id="property_listing_section" className="mt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-12">
          <div className="theme_heading">
            <h2>Latest Property Listings</h2>
          </div>
          <div className="theme_description">
            <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 theme_button">
          <a href="#" className="btn">explore all listings<i className="icon fa-solid fa-arrow-right" /></a>
        </div>
      </div>
      <div id="property-listings" className="pt-80">
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-1.png" alt="property_image" />
            <p className="property-price">$800k</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-2.png" alt="property_image" />
            <p className="property-price">$1.3m</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-3.png" alt="property_image" />
            <p className="property-price">$650k</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-1.png" alt="property_image" />
            <p className="property-price">$800k</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-2.png" alt="property_image" />
            <p className="property-price">$1.3m</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
        <div className="property">
          <div className="property-image"><img src="assets/images/property-listing/property-3.png" alt="property_image" />
            <p className="property-price">$650k</p>
          </div>
          <h3 className="property-title">the mysterious mansion</h3>
          <p className="property-address">228 Park Ave S, NY, 10003-1502, USA</p>
          <div className="facilities">
            <p className="bedroom-facility value">Bedroom: <span>3</span></p>
            <p className="bathroom-facility value">Bathroom: <span>5</span></p>
            <p className="area-facility value">Area: <span>1230 Sft.</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Property listing section ends*/}
  {/* Buyer and seller section starts*/}
  <section id="buyer_seller_section" className="mt-100">
    <div className="bg_img_buyer_seller">
      <div className="container">
        <div className="row buyer_seller_top_inner_section">
          <div className="col-md-6 col-12 left_column">
            <img className="img_shadow" src="assets/images/house-images/house-1.png" alt="house-image" />
          </div>
          <div className="col-md-6 col-12 right_column">
            <div className="buyer_seller_title">
              <h5>for buyers</h5>
            </div>
            <div className="buyer_seller_heading">
              <h2>your dream home.</h2>
            </div>
            <div className="buyer_seller_para">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="buyer_seller_button">
              <a className="btn" href="#">find a home</a>
            </div>
          </div>
        </div>
        <div className="row buyer_seller_bottom_inner_section">
          <div className="col-md-6 col-12 left_column">
            <div className="buyer_seller_title">
              <h5>for sellers</h5>
            </div>
            <div className="buyer_seller_heading">
              <h2>value your home</h2>
            </div>
            <div className="buyer_seller_para">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="buyer_seller_button">
              <a className="btn" href="#">home valuation</a>
            </div>
          </div>
          <div className="col-md-6 col-12 right_column">
            <img className="img_shadow" src="assets/images/house-images/house-2.png" alt="house-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Buyer and seller section ends*/}
  {/* Category section starts*/}
  <section id="category_section" className="mt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-12">
          <div className="theme_heading">
            <h2>Find the category for you</h2>
          </div>
          <div className="theme_description">
            <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 theme_button">
          <a href="#" className="btn">explore properties<i className="icon fa-solid fa-arrow-right" /></a>
        </div>
      </div>
      <div className="row category_inner_section">
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-1.png")'}}>
                </div>
                <h4 className="category_title">agriculture</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-2.png")'}}>
                </div>
                <h4 className="category_title">industrial</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-3.png")'}}>
                </div>
                <h4 className="category_title">office space</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-4.png")'}}>
                </div>
                <h4 className="category_title">appartments</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-5.png")'}}>
                </div>
                <h4 className="category_title">commercial</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6 category_column">
          <div className="real_estate_categories">
            <div className="category_items">
              <a className="category_items_link" href="#">
                <div className="p_category_image" style={{backgroundImage: 'url("assets/images/categories/category-6.png")'}}>
                </div>
                <h4 className="category_title">residential</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Category section ends*/}
  {/* Testimonial section starts*/}
  <section id="testimonial_section" className="mt-100">
    <div className="bg_img_testimonial">
      <div className="container">
        <div className="theme_heading">
          <h2>Testimonials from clients</h2>
        </div>
        <div className="theme_description">
          <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
        <div className="testimonial_inner_section">
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                  of a
                  document or a typeface without relying on meaningful content.”</p>
              </div>
              <div className="client_name">
                <h4>eleanor pena</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“Lorem ipsum may be used as a placeholder before final copy is available.”</p>
              </div>
              <div className="client_name">
                <h4>jessica molino</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                  used to
                  demonstrate the visual form of a document.”</p>
              </div>
              <div className="client_name">
                <h4>rachel keiser</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                  of a
                  document or a typeface without relying on meaningful content.”</p>
              </div>
              <div className="client_name">
                <h4>eleanor pena</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“Lorem ipsum may be used as a placeholder before final copy is available.”</p>
              </div>
              <div className="client_name">
                <h4>jessica molino</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
          <div className="client_testimonials">
            <div className="testimonial">
              <div className="testimonial_icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="client_review">
                <p>“In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                  used to
                  demonstrate the visual form of a document.”</p>
              </div>
              <div className="client_name">
                <h4>rachel keiser</h4>
              </div>
              <div className="client_destination">
                <h5>Home Seller, USA</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial section ends*/}
  {/* Agent section starts*/}
  <section id="agent_section" className="mt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-12">
          <div className="theme_heading">
            <h2>Meet our agents</h2>
          </div>
          <div className="theme_description">
            <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 theme_button">
          <a href="#" className="btn">meet our team<i className="icon fa-solid fa-arrow-right" /></a>
        </div>
      </div>
      <div id="agent-listings" className="pt-80">
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-1.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">jorder smith</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-2.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">maria anderson</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-3.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">lumi jackson</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-1.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">jorder smith</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-2.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">maria anderson</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent">
          <div className="agent_detail">
            <div className="foreground">
              <a href="#" className="agent-image">
                <img src="assets/images/agents/agent-3.png" alt="agent-image" />
              </a>
              <div className="agent_social">
                <a className="social_icons facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                <a className="social_icons twitter" href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter" /></a>
                <a className="social_icons linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                <a className="social_icons instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                <a className="social_icons whatsapp" href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
            <div className="background">
              <div className="agent_description">
                <h4 className="agent-title">lumi jackson</h4>
                <h6 className="agent-type">real estate agents</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Agent section ends*/}
  {/* Estimate section starts*/}
  <section id="estimate_section" className="mt-100">
    <div className="container">
      <div className="estimate_inner_section">
        <div className="row estimate_inner_row">
          <div className="col-lg-7 col-12 column_1">
            <div className="estimate_heading">
              <h2>Get a free estimate</h2>
            </div>
            <div className="estimate_para">
              <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut
                labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-lg-5 col-12 column_2">
            <a href="#" className="estimate_property_button btn">see properties</a>
            <br />
            <a href="#" className="estimate_learn_button btn">learn more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
 
    </>
  )
}

export default Body