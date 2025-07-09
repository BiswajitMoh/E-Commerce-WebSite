import React from "react";


 

import "../styles/AboutUs.css"; // We'll put CSS here



 




 

const AboutUs = () => {


 

  return (


 

    <div className="about-us-container">


 

      <div className="overlay">


 

        <div className="container py-5 text-white">


 

          <h1 className="display-4 mb-4">About Us</h1>


 

          <p className="lead">


 

            Welcome to Unibox, your number one source for a wide variety of


 

            products across multiple categories. We're dedicated to giving you


 

            the very best products with a focus on quality, customer service,


 

            and uniqueness. Founded in 2003, Unibox has come a long way from its


 

            beginnings. When we first started out, our passion for providing the


 

            best products for our customers drove us to build a comprehensive


 

            shopping experience.


 

          </p>

          {/* Testimonial Section */}


 

          <section className="testimonials mt-5">


 

            <h2 className="mb-4">What Our Customers Say</h2>


 

            <div className="testimonial-cards row">


 

              <div className="card col-md-4 mb-4 bg-dark bg-opacity-50 border-0">


 

                <div className="card-body">


 

                  <p className="card-text">


 

                    “I had a fantastic experience shopping here. The products


 

                    are top quality and the service is excellent.”


 

                  </p>


 

                  <h5 className="card-title">- John Doe</h5>


 

                  <div className="stars text-warning">


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="card col-md-4 mb-4 bg-dark bg-opacity-50 border-0">


 

                <div className="card-body">


 

                  <p className="card-text">


 

                    “Fast shipping and excellent customer support. Highly


 

                    recommend this store!”


 

                  </p>


 

                  <h5 className="card-title">- Jane Smith</h5>


 

                  <div className="stars text-warning">


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-half"></i>


 

                  </div>


 

                </div>


 

              </div>


 

              <div className="card col-md-4 mb-4 bg-dark bg-opacity-50 border-0">


 

                <div className="card-body">


 

                  <p className="card-text">


 

                    “Great variety and amazing deals. I keep coming back for


 

                    more!”


 

                  </p>


 

                  <h5 className="card-title">- Emily Johnson</h5>


 

                  <div className="stars text-warning">


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star-fill"></i>


 

                    <i className="bi bi-star"></i>


 

                  </div>


 

                </div>


 

              </div>


 

            </div>


 

          </section>


 

        </div>


 

      </div>


 

    </div>


 

  );


 

};



 




 

export default AboutUs;


 