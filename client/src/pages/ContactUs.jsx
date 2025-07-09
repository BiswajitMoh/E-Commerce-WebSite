import React from 'react';

import '../styles/ContactUs.css';


 

const ContactUs = () => {

  return (

    <div className="contact-us-container">

      <div className="overlay">

        <div className="container py-5 text-white">

          <h1 className="text-center mb-5 fw-bold text-white">Contact Us</h1>


 

          <div className="row g-4 justify-content-center">

            <div className="col-lg-8">

              <div className="card contact-card h-100">

                <div className="card-body">

                  <p className="lead mb-4">

                    We value communication with our customers. Whether you have a question, feedback, or just want to say hello — we’re here to help!

                  </p>


 

                  <div className="contact-details">

                    <p><strong>Email:</strong> contact@example.com</p>

                    <p><strong>Phone:</strong> +1 234 567 890</p>

                    <p><strong>Address:</strong> 123 Main Street, City, Country</p>

                    <p><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>

                  </div>


 

                  <div className="contact-us-message mt-4">

                    <p className="fst-italic text-light">

                      If you have any questions, feel free to reach out. We’re happy to help!

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


 

        </div>

      </div>

    </div>

  );

};


 

export default ContactUs;


 