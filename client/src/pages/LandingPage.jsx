import React from "react";


 

import { Link } from "react-router-dom";


 

import "../styles/LandingPage.css"; // We'll create this custom CSS file



 




 

const LandingPage = () => {


 

  return (


 

    <div className="landing-page">

      <main>


 

        {/* Hero Section */}


 

        <section className="hero-section py-5">


 

          <div className="container">


 

            <div className="row align-items-center min-vh-75">


 

              <div className="col-lg-6 py-5">


 

                <h1 className="display-4 fw-bold text-white mb-3">


 

                  <span className="d-block">Next-Gen Shopping</span>


 

                  <span className="d-block text-light-blue">Experience</span>


 

                </h1>


 

                <p className="lead text-white-50 mb-4">


 

                  The only platform with personalization, verified


 

                  premium vendors, and industry-leading 45-day satisfaction


 

                  guarantee.


 

                </p>



 




 

                <div className="row mb-4">


 

                  <div className="col-6">


 

                    <div className="d-flex align-items-center mb-2">


 

                      <i className="bi bi-shield-check text-light-blue me-2"></i>


 

                      <span className="text-white small">


 

                        100% Authentic Products


 

                      </span>


 

                    </div>


 

                    <div className="d-flex align-items-center">


 

                      <i className="bi bi-star text-light-blue me-2"></i>


 

                      <span className="text-white small">


 

                        Exclusive Member Deals


 

                      </span>


 

                    </div>


 

                  </div>


 

                  <div className="col-6">


 

                    <div className="d-flex align-items-center mb-2">


 

                      <i className="bi bi-truck text-light-blue me-2"></i>


 

                      <span className="text-white small">


 

                        Carbon-Neutral Shipping


 

                      </span>


 

                    </div>


 

                    <div className="d-flex align-items-center">


 

                      <i className="bi bi-check-circle text-light-blue me-2"></i>


 

                      <span className="text-white small">


 

                        Price Match Guarantee


 

                      </span>


 

                    </div>


 

                  </div>


 

                </div>



 




 

                <div className="d-grid gap-2 d-md-flex">


 

                  <Link


 

                    to="/register"


 

                    className="btn btn-light btn-lg px-4 me-md-2"


 

                  >


 

                    Start Shopping


 

                  </Link>


 

                  <Link


 

                    to="/login"


 

                    className="btn btn-outline-light btn-lg px-4"


 

                  >


 

                    Sign In


 

                  </Link>


 

                </div>


 

              </div>


 

              <div className="col-lg-6 hero-image-container">


 

                <div className="hero-card text-center p-4 rounded">


 

                  <h3 className="text-white fw-bold mb-3">


 

                    Trusted by 2M+ shoppers


 

                  </h3>


 

                  <div className="d-flex justify-content-center mb-2">


 

                    <i className="bi bi-star-fill text-warning"></i>


 

                    <i className="bi bi-star-fill text-warning"></i>


 

                    <i className="bi bi-star-fill text-warning"></i>


 

                    <i className="bi bi-star-fill text-warning"></i>


 

                    <i className="bi bi-star-fill text-warning"></i>


 

                  </div>


 

                  <p className="text-white small">4.9/5 average satisfaction</p>


 

                </div>


 

              </div>


 

            </div>


 

          </div>


 

        </section>



 




 

        {/* Trust Badges */}


 

        <section className="trust-badges bg-light py-5">


 

          <div className="container">


 

            <p className="text-center text-primary fw-bold text-uppercase mb-4">


 

              Trusted by shoppers worldwide


 

            </p>


 

            <div className="row text-center g-4">


 

              <div className="col-6 col-md-3">


 

                <div className="d-flex flex-column align-items-center">


 

                  <i className="bi bi-shield-check fs-1 text-secondary mb-2"></i>


 

                  <span className="text-muted small">Secure Payments</span>


 

                </div>


 

              </div>


 

              <div className="col-6 col-md-3">


 

                <div className="d-flex flex-column align-items-center">


 

                  <i className="bi bi-truck fs-1 text-secondary mb-2"></i>


 

                  <span className="text-muted small">Fast Delivery</span>


 

                </div>


 

              </div>


 

              <div className="col-6 col-md-3">


 

                <div className="d-flex flex-column align-items-center">


 

                  <i className="bi bi-check-circle fs-1 text-secondary mb-2"></i>


 

                  <span className="text-muted small">Quality Guaranteed</span>


 

                </div>


 

              </div>


 

              <div className="col-6 col-md-3">


 

                <div className="d-flex flex-column align-items-center">


 

                  <i className="bi bi-arrow-counterclockwise fs-1 text-secondary mb-2"></i>


 

                  <span className="text-muted small">Easy Returns</span>


 

                </div>


 

              </div>


 

            </div>


 

          </div>


 

        </section>




 

        {/* Features */}


 

        <section className="features py-5">


 

          <div className="container">


 

            <div className="text-center mb-5">


 

              <h6 className="text-primary text-uppercase fw-bold">


 

                Why choose us?


 

              </h6>


 

              <h2 className="display-5 fw-bold mb-3">


 

                The platform that puts quality first


 

              </h2>


 

              <p


 

                className="lead text-muted mx-auto"


 

                style={{ maxWidth: "700px" }}


 

              >


 

                Experience shopping like never before with our curated selection


 

                and premium service.


 

              </p>


 

            </div>


 

            <div className="row g-4">


 

              <div className="col-md-6 col-lg-4">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body text-center p-4">


 

                    <div className="icon-box bg-primary text-white mb-4">


 

                      <i className="bi bi-person-check"></i>


 

                    </div>


 

                    <h4 className="card-title mb-3">Verified Vendors</h4>


 

                    <p className="card-text text-muted">


 

                      Every seller on our platform is thoroughly verified to


 

                      ensure you get only the best products and services.


 

                    </p>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="col-md-6 col-lg-4">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body text-center p-4">


 

                    <div className="icon-box bg-primary text-white mb-4">


 

                      <i className="bi bi-award"></i>


 

                    </div>


 

                    <h4 className="card-title mb-3">Quality Guarantee</h4>


 

                    <p className="card-text text-muted">


 

                      We stand behind every product. Not happy? We'll make it


 

                      right with our 100% satisfaction guarantee.


 

                    </p>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="col-md-6 col-lg-4 mx-auto">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body text-center p-4">


 

                    <div className="icon-box bg-primary text-white mb-4">


 

                      <i className="bi bi-cash-coin"></i>


 

                    </div>


 

                    <h4 className="card-title mb-3">Best Value</h4>


 

                    <p className="card-text text-muted">


 

                      Get the best prices on premium products. Our pricing model


 

                      ensures you always get excellent value.


 

                    </p>


 

                  </div>


 

                </div>


 

              </div>


 

            </div>


 

          </div>


 

        </section>


 

        {/* Stats */}


 

        <section className="stats text-white py-5">


 

          <div className="container py-4">


 

            <div className="text-center mb-5">


 

              <h2 className="display-5 fw-bold">


 

                Trusted by shoppers worldwide


 

              </h2>


 

              <p className="lead text-light-blue">


 

                Join millions of satisfied customers who choose our platform for


 

                their shopping needs.


 

              </p>


 

            </div>


 

            <div className="row text-center g-4">


 

              <div className="col-md-4">


 

                <h2 className="display-3 fw-bold">2M+</h2>


 

                <p className="lead text-light-blue">Products</p>


 

              </div>


 

              <div className="col-md-4">


 

                <h2 className="display-3 fw-bold">500K+</h2>


 

                <p className="lead text-light-blue">Customers</p>


 

              </div>


 

              <div className="col-md-4">


 

                <h2 className="display-3 fw-bold">5K+</h2>


 

                <p className="lead text-light-blue">Vendors</p>


 

              </div>


 

            </div>


 

          </div>


 

        </section>


 

        {/* Testimonials */}


 

        <section className="testimonials py-5">


 

          <div className="container">


 

            <div className="text-center mb-5">


 

              <h6 className="text-primary text-uppercase fw-bold">


 

                Testimonials


 

              </h6>


 

              <h2 className="display-5 fw-bold mb-3">


 

                Hear from our happy customers


 

              </h2>


 

            </div>


 

            <div className="row g-4">


 

              <div className="col-md-6 col-lg-4">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body p-4">


 

                    <div className="d-flex mb-3">


 

                      <i className="bi bi-quote fs-2 text-primary me-3"></i>


 

                      <p className="card-text text-muted">


 

                        I've been shopping here for over a year now. The product


 

                        quality and customer service are exceptional. I won't


 

                        shop anywhere else!


 

                      </p>


 

                    </div>


 

                    <div className="d-flex align-items-center">


 

                      <div className="avatar bg-secondary rounded-circle me-3"></div>


 

                      <div>


 

                        <h6 className="mb-0 fw-bold">Sarah Johnson</h6>


 

                        <div className="rating text-warning">


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                        </div>


 

                      </div>


 

                    </div>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="col-md-6 col-lg-4">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body p-4">


 

                    <div className="d-flex mb-3">


 

                      <i className="bi bi-quote fs-2 text-primary me-3"></i>


 

                      <p className="card-text text-muted">


 

                        The vendor verification process gives me confidence that


 

                        I'm buying quality products. Fast shipping and excellent


 

                        packaging too!


 

                      </p>


 

                    </div>


 

                    <div className="d-flex align-items-center">


 

                      <div className="avatar bg-secondary rounded-circle me-3"></div>


 

                      <div>


 

                        <h6 className="mb-0 fw-bold">Michael Chen</h6>


 

                        <div className="rating text-warning">


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star"></i>


 

                        </div>


 

                      </div>


 

                    </div>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="col-md-6 col-lg-4 mx-auto">


 

                <div className="card h-100 border-0 shadow-sm">


 

                  <div className="card-body p-4">


 

                    <div className="d-flex mb-3">


 

                      <i className="bi bi-quote fs-2 text-primary me-3"></i>


 

                      <p className="card-text text-muted">


 

                        As a small business owner, I appreciate the platform's


 

                        fair fees and excellent visibility. My sales have


 

                        increased by 200% since joining!


 

                      </p>


 

                    </div>


 

                    <div className="d-flex align-items-center">


 

                      <div className="avatar bg-secondary rounded-circle me-3"></div>


 

                      <div>


 

                        <h6 className="mb-0 fw-bold">James Wilson</h6>


 

                        <div className="rating text-warning">


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                          <i className="bi bi-star-fill"></i>


 

                        </div>


 

                      </div>


 

                    </div>


 

                  </div>


 

                </div>


 

              </div>


 

            </div>


 

          </div>


 

        </section>



 

        {/* CTA */}


 

        <section className="cta bg-light py-5">


 

          <div className="container">


 

            <div className="row align-items-center">


 

              <div className="col-lg-8 mb-4 mb-lg-0">


 

                <h2 className="display-5 fw-bold mb-2">


 

                  Ready to get started?


 

                </h2>


 

                <p className="lead text-primary">Join our platform today.</p>


 

              </div>


 

              <div className="col-lg-4 text-lg-end">


 

                <Link to="/register" className="btn btn-primary btn-lg me-2">


 

                  Create an account


 

                </Link>


 

                <Link to="/login" className="btn btn-outline-primary btn-lg">


 

                  Sign in


 

                </Link>


 

              </div>


 

            </div>


 

          </div>


 

        </section>


 

      </main>



 




 

      {/* Footer */}


 

      <footer className="footer bg-dark text-white py-5">


 

        <div className="container">


 

          <div className="row justify-content-center mb-4">


 

            <div className="col-auto px-3">


 

            <Link to="/about" className="text-white-50 text-decoration-none">

                   About Us

                </Link>


 

            </div>


 

            {/* <div className="col-auto px-3">


 

              <a href="#" className="text-white-50 text-decoration-none">


 

                Products


 

              </a>


 

            </div>


 

            <div className="col-auto px-3">


 

              <a href="#" className="text-white-50 text-decoration-none">


 

                Vendors


 

              </a>


 

            </div> */}


 

            {/* <div className="col-auto px-3">


 

              <a href="#" className="text-white-50 text-decoration-none">


 

                Blog


 

              </a>


 

            </div>


 

            <div className="col-auto px-3">


 

              <a href="#" className="text-white-50 text-decoration-none">


 

                Support


 

              </a>


 

            </div> */}


 

            <div className="col-auto px-3">


 

            <Link to="/contact" className="text-white-50 text-decoration-none">

                   Contact Us

                </Link>


 

            </div>


 

          </div>


 

          <div className="d-flex justify-content-center mb-4">


 

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">


 

              <i className="bi bi-facebook text-white-50"></i>


 

            </a>


 

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">


 

              <i className="bi bi-instagram text-white-50"></i>


 

            </a>


 

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">


 

              <i className="bi bi-twitter text-white-50"></i>


 

            </a>


 

            {/* <a href="#" className="social-icon mx-2">


 

              <i className="bi bi-linkedin text-white-50"></i>


 

            </a> */}


 

          </div>


 

          <p className="text-center text-white-50 mb-0">


 

            &copy; {new Date().getFullYear()} UniBox, Inc. All rights


 

            reserved.


 

          </p>


 

        </div>


 

      </footer>


 

    </div>


 

  );


 

};



 




 

export default LandingPage;



 