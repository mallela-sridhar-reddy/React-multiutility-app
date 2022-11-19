import React from 'react';
import {Link} from 'react-router-dom';

export default function TextUtils(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active mx-5"
                  aria-current="page"
                  href="https://wordcounter.net/"
                >
                  wordcounter.net
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/about"
                >
                  Component
                </Link>
              </li>
             
            </ul>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
              <input
                className="form-check-input mx-3"
                type="checkbox"
                onClick={props.modeSetter}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Change Mode
              </label>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
