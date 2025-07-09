import React, { useState } from 'react';


 

import { Link, useNavigate } from 'react-router-dom';


 

import { useAuth } from '../contexts/AuthContext';


 

import '../styles/NavBar.css';





 

const Navbar = () => {


 

  const { user, logout } = useAuth();


 

  const navigate = useNavigate();


 

  const [query, setQuery] = useState('');


 

  const [isMenuOpen, setIsMenuOpen] = useState(false);





 

  const handleLogout = () => {


 

    logout();


 

    navigate('/');


 

  };





 

  const handleSearch = (e) => {


 

    e.preventDefault();


 

    if (query.trim()) {


 

      navigate(`/search?q=${query}`);


 

      setQuery('');


 

    }


 

  };





 

  return (


 

    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">


 

      <Link to="/home" className="navbar-brand">


 

        <span className="text-primary">Uni</span><span className="text-secondary">Box</span>


 

      </Link>


 

      <button


 

        className="navbar-toggler"


 

        type="button"


 

        onClick={() => setIsMenuOpen(!isMenuOpen)}


 

      >


 

        <span className="navbar-toggler-icon"></span>


 

      </button>





 

      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>


 

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


 

          {user?.role !== 'vendor' && (


 

            <>


 

              <li className="nav-item">


 

                <Link className="nav-link" to="/products">Products</Link>


 

              </li>


 

              <li className="nav-item">


 

                <Link className="nav-link" to="/services">Services</Link>


 

              </li>


 

              <li className="nav-item">


 

                <Link className="nav-link" to="/cart">Cart</Link>


 

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/appointments">Appointments</Link>

              </li>


 

            </>


 

          )}


 

          {user?.role === 'vendor' && (


 

            <li className="nav-item">


 

              <Link className="nav-link" to="/vendor/dashboard">Vendor Dashboard</Link>


 

            </li>


 

          )}


 

        </ul>





 

        {user?.role !== 'vendor' && (

  <form className="d-flex me-3" onSubmit={handleSearch}>

    <input

      className="form-control"

      type="search"

      placeholder="Search products & services..."

      value={query}

      onChange={(e) => setQuery(e.target.value)}

    />

  </form>

)}





 

        {user ? (


 

          <div className="nav-item dropdown">


 

            <button


 

              className="btn btn-link nav-link dropdown-toggle"


 

              onClick={() => setIsMenuOpen(!isMenuOpen)}


 

            >


 

              <img


 

                src={user.profileImage || '/profile.jpg'}


 

                alt="Profile"


 

                className="rounded-circle me-2"


 

                width="32"


 

                height="32"


 

              />


 

              {user.name}


 

            </button>


 

            <div className={`dropdown-menu dropdown-menu-end ${isMenuOpen ? 'show' : ''}`}>


 

              <Link className="dropdown-item" to="/profile">Profile</Link>


 

              <Link className="dropdown-item" to="/myorders">My Orders</Link>


 

              <div className="dropdown-divider"></div>


 

              <button className="dropdown-item text-danger" onClick={handleLogout}>


 

                Logout


 

              </button>


 

            </div>


 

          </div>


 

        ) : (


 

          <div className="d-flex">


 

            <Link to="/login" className="btn btn-outline-primary me-2">


 

              Login


 

            </Link>


 

            <Link to="/register" className="btn btn-primary">


 

              Register


 

            </Link>


 

          </div>


 

        )}


 

      </div>


 

    </nav>


 

  );


 

};





 

export default Navbar;