import React from 'react'

const Header = () => {
  return (
    <header className="header-with-topbar">
    <div
      className="header-top-bar top-bar-dark cover-background"
      style={{
        backgroundImage: 'url("images/demo-hosting-header-bg.jpg")',
      }}
    >
      <div className="container-fluid">
        <div className="row h-42px align-items-center m-0">
          <div className="col-md-7 text-center text-md-start">
            <div className="fs-13 text-white">
              <span className="opacity-6 me-5px">
                Tailored solutions to boost your business
              </span>
              {/* <span className="fw-600">$2.78/mo*</span> */}
            </div>
          </div>
          <div className="col-5 text-end d-none d-md-flex">
            <a
              href="demo-hosting-contact.html"
              className="widget fs-13 me-20px text-white opacity-8 d-none d-lg-inline-block"
            >
              <i className="feather icon-feather-phone" />
              24/7 Support
            </a>
            <a
              href="mailto:support@domain.com"
              className="widget fs-13 text-white text-white-hover opacity-8"
            >
              <i className="feather icon-feather-mail text-white position-relative top-1px" />
              info@sapriseconsultancy.com
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* start navigation */}
    <nav
      className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse"
      data-header-hover="light"
    >
      <div className="container-fluid">
        <div className="col-auto col-lg-2 me-lg-0 me-auto">
          <a className="navbar-brand" href="/">
            <img
              src="images/logo/saprise-white.png"
              data-at2x="images/demo-hosting-logo-white@2x.png"
              alt=""
              className="default-logo"
            />
            <img
              src="images/logo/saprise-black.png"
              data-at2x="images/demo-hosting-logo-black@2x.png"
              alt=""
              className="alt-logo"
            />
            <img
              src="images/logo/saprise-black.png"
              data-at2x="images/demo-hosting-logo-black@2x.png"
              alt=""
              className="mobile-logo"
            />
          </a>
        </div>
        <div className="col-auto menu-order position-static">
          <button
            className="navbar-toggler float-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Services
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="demo-hosting-domain.html" className="nav-link">
                  Domain
                </a>
              </li> */}
              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/support" className="nav-link">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto col-lg-2 text-end lg-pe-5px">
          <div className="header-icon">
            {/* <div className="header-search-icon icon d-none d-sm-flex">
              <a href="#" className="search-form-icon header-search-form">
                <i className="align-middle feather icon-feather-search fs-18 me-5px xl-me-0" />
                <span className="align-middle d-none d-xxl-inline-block">
                  {" "}
                  Search
                </span>
              </a>
              <div className="search-form-wrapper">
                <button
                  title="Close"
                  type="button"
                  className="search-close"
                >
                  ×
                </button>
                <form
                  id="search-form"
                  role="search"
                  method="get"
                  className="search-form text-left"
                  action="search-result.html"
                >
                  <div className="search-form-box">
                    <h2 className="text-dark-gray fw-700 ls-minus-2px text-center mb-4 alt-font">
                      What are you looking for?
                    </h2>
                    <input
                      className="search-input"
                      id="search-form-input5e219ef164995"
                      placeholder="Enter your keywords..."
                      name="s"
                      defaultValue=""
                      type="text"
                      autoComplete="off"
                    />
                    <button type="submit" className="search-button">
                      <i
                        className="feather icon-feather-search"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
            <div className="header-button ms-30px xxl-ms-10px xs-ms-0">
              <a
                href="/contact"
                className="btn btn-white btn-small btn-rounded btn-box-shadow btn-switch-text fw-600"
              >
                <span>
                  <span className="btn-double-text" data-text="Get a Quote">
                    Get a Quote
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* end navigation */}
  </header>
  )
}

export default Header