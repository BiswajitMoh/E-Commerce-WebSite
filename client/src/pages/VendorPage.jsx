import React from 'react';

import '../styles/VendorPage.css';

import 'bootstrap/dist/css/bootstrap.min.css';


 

const VendorsOverview = () => {

  const vendorCategories = [

    { name: 'Landscaping Services', description: 'Vendors who offer lawn care, garden design, and outdoor maintenance for homes and businesses.' },

    { name: 'Plumbing Experts', description: 'Professional plumbers handling installations, repairs, drainage systems, and emergency plumbing needs.' },

    { name: 'Carpentry Professionals', description: 'Vendors skilled in custom furniture, wood repairs, cabinetry, and wooden construction work.' },

    { name: 'Electrical Technicians', description: 'Licensed electricians providing wiring, lighting installations, and appliance servicing.' },

    { name: 'Cleaning Services', description: 'Vendors offering residential and commercial cleaning, deep cleaning, and sanitation services.' },

  ];


 

  return (

    <div className="vendor-container">

      <div className="overlay">

        <div className="container  py-5 text-white">

        <h1 className="text-center mb-5 fw-bold text-white">Service Categories Overview</h1>

          <div className="row g-4">

            {vendorCategories.map((vendor, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card category-card h-100">

                  <div className="card-body">

                    <h5 className="card-title text-light">{vendor.name}</h5>

                    <p className="card-text text-light">{vendor.description}</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};


 

export default VendorsOverview;


 