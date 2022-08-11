import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { NavLink } from 'react-router-dom';
import {HiArrowSmRight} from '../../../node_modules/react-icons/hi';

function Header() {

  return (
        <header className='p-3 header'>
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <NavLink to='/home' className="nav-link navButton">Home</NavLink>
                  <NavLink to='/about' className="nav-link navButton">About</NavLink>
                  <NavLink to='/leagues' className="nav-link navButton">Leagues</NavLink>
                  <NavLink to='/contact' className="nav-link navButton">Contact us</NavLink>
                </nav>
                <div className="text-end">
                  <button type="button" className="btn me-2 btn-login"><a href="/login" className="no-css">Login</a></button>
                  <button type="button" className="btn btn-peach"><a href="/sign-up" className="no-css-b">Sign-up <HiArrowSmRight /></a></button>
                </div>
              </div>
            </div>
        </header>
    )
}

export default Header;