import React from 'react';
import { Media,Container } from 'reactstrap';

export default function HeaderMenu() {
  return (
    <div className="bottom-header">
      <Container>
        <div className="bottom-content-wrap row">
          <div className="col-sm-4">
            <div className="site-branding">
              <a href="#">
                <Media src="/img/logo.png" alt="Brand" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 text-right">
            <ul id="mainmenu" className="nav navbar-nav nav-menu">
              <li className="active">
                <a href="index.html">Home</a>
                <ul>
                  <li>
                    <a href="index.html">Home Default</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Modern</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="causes.html">Causes</a>
              </li>
              <li>
                <a href="event.html">Event</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="team.html">Volunteers</a>
                  </li>
                  <li>
                    <a href="404.html">404 Not Found</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog-grid.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <a href="#" className="default-btn">
              Donet Now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
