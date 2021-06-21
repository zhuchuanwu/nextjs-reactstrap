import React, { useEffect } from 'react';

export default function HomeSlider() {
  return (
    <section className="slider-section">
      {/* <div className="slider-wrapper"> */}
      <div className="container-fluid vh-100 banner-box">
        <div id="main-slider" className="nivoSlider">
          <img src="img/slider-1.jpg" alt="" title="#slider-caption-1" />
          <img src="img/slider-2.jpg" alt="" title="#slider-caption-2" />
          <img src="img/slider-3.jpg" alt="" title="#slider-caption-3" />
        </div>

        <div id="slider-caption-1" className="nivo-html-caption slider-caption">
          <div className="display-table">
            <div className="table-cell">
              <div className="container">
                <div className="slider-text">
                  <h5 className="wow cssanimation fadeInBottom">
                    Join Us Today
                  </h5>
                  <h1 className="wow cssanimation leFadeInRight sequence">
                    Better Life for People
                  </h1>
                  <p className="wow cssanimation fadeInTop" data-wow-delay="1s">
                    Help today because tomorrow you may be the one who needs
                    helping! <br />
                    Forget what you can get and see what you can give.
                  </p>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Join With Us
                  </a>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Donet Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="slider-caption-2" className="nivo-html-caption slider-caption">
          <div className="display-table">
            <div className="table-cell">
              <div className="container">
                <div className="slider-text">
                  <h1
                    className="wow cssanimation fadeInTop"
                    data-wow-delay="1s"
                    data-wow-duration="800ms"
                  >
                    Together we <br />
                    can make a Difference
                  </h1>
                  <p
                    className="wow cssanimation fadeInBottom"
                    data-wow-delay="1s"
                  >
                    Help today because tomorrow you may be the one who needs
                    helping! <br />
                    Forget what you can get and see what you can give.
                  </p>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Join With Us
                  </a>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Donet Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="slider-caption-3" className="nivo-html-caption slider-caption">
          <div className="display-table">
            <div className="table-cell">
              <div className="container">
                <div className="slider-text">
                  <h5 className="wow cssanimation fadeInBottom">
                    Join Us Today
                  </h5>
                  <h1
                    className="wow cssanimation lePushReleaseFrom sequence"
                    data-wow-delay="1s"
                  >
                    Give a little. Change a lot.
                  </h1>
                  <p className="wow cssanimation fadeInTop" data-wow-delay="1s">
                    Help today because tomorrow you may be the one who needs
                    helping! <br />
                    Forget what you can get and see what you can give.
                  </p>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Join With Us
                  </a>
                  <a
                    href="#"
                    className="default-btn wow cssanimation fadeInBottom"
                    data-wow-delay="0.8s"
                  >
                    Donet Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
