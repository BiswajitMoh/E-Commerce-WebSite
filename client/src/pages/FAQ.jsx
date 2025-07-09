import React from "react";

import "../styles/FAQ.css";


 

const FAQ = () => {

  return (

    <div className="faq-container">

      <div className="overlay">

        <div className="container py-5 text-white">

          <h1 className="display-4 mb-4">Frequently Asked Questions</h1>


 

          <div className="faq-list">

            <div className="faq-item mb-4">

              <h4 className="text-warning">What is your return policy?</h4>

              <p>

                We offer a 30-day return policy on all unused products with original packaging.

              </p>

            </div>


 

            <div className="faq-item mb-4">

              <h4 className="text-warning">How can I track my order?</h4>

              <p>

                Once your order is shipped, you’ll receive a tracking link via email.

              </p>

            </div>


 

            <div className="faq-item mb-4">

              <h4 className="text-warning">Do you offer customer support?</h4>

              <p>

                Yes, we’re available Monday to Friday, 9 AM – 6 PM via phone or email.

              </p>

            </div>


 

            <div className="faq-item mb-4">

              <h4 className="text-warning">Can I change my shipping address?</h4>

              <p>

                As long as your order hasn’t shipped, we can update the shipping address. Contact support quickly!

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};


 

export default FAQ;


 