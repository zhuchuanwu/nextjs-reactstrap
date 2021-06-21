import React from 'react';
import "./TopHeader.scss"

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-content-wrap row">
          <div className="col-sm-8">
            <ul className="left-info">
              <li>
                <a href="#">
                  <i className="ti-email"></i>Info@YourDomain.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-mobile"></i>+(333) 052 39876
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 d-none d-md-block">
            <ul className="right-info">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
