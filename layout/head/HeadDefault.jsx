/* eslint-disable no-unused-vars */
/** npm packages */
import React, { Component } from 'react';
// import propTypes from 'prop-types';
import Head from 'next/head';
import { THEME } from '../../constants/vars';

function HeadDefault({
  title,
  description,
  keyword,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogImageAlt,
  ogUrl,
}) {
  return (
    <Head>
      <title>
        {title} | {THEME.title}
      </title>
      <link rel="icon" href="/favicon.ico" />

      {/* META SEO */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />

      <link rel="stylesheet" href="css/font-awesome.min.css" />

      <link rel="stylesheet" href="css/themify-icons.css" />

      <link rel="stylesheet" href="css/elegant-font-icons.css" />

      <link rel="stylesheet" href="css/elegant-line-icons.css" />

      <link rel="stylesheet" href="css/bootstrap.min.css" />

      <link rel="stylesheet" href="css/venobox/venobox.css" />

      <link rel="stylesheet" href="css/owl.carousel.css" />

      <link rel="stylesheet" href="css/slicknav.min.css" />

      <link rel="stylesheet" href="css/css-animation.min.css" />

      <link rel="stylesheet" href="css/nivo-slider.css" />

      <link rel="stylesheet" href="css/main.css" />

      <link rel="stylesheet" href="css/responsive.css" />

      <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>

      <script src="js/vendor/bootstrap.min.js"></script>

      <script src="js/vendor/tether.min.js"></script>

      <script src="js/vendor/imagesloaded.pkgd.min.js"></script>

      <script src="js/vendor/owl.carousel.min.js"></script>

      <script src="js/vendor/jquery.isotope.v3.0.2.js"></script>

      <script src="js/vendor/smooth-scroll.min.js"></script>

      <script src="js/vendor/venobox.min.js"></script>

      <script src="js/vendor/jquery.ajaxchimp.min.js"></script>

      <script src="js/vendor/jquery.counterup.min.js"></script>

      <script src="js/vendor/jquery.waypoints.v2.0.3.min.js"></script>

      <script src="js/vendor/jquery.slicknav.min.js"></script>

      <script src="js/vendor/jquery.nivo.slider.pack.js"></script>

      <script src="js/vendor/letteranimation.min.js"></script>

      <script src="js/vendor/wow.min.js"></script>

      <script src="js/contact.js"></script>

      <script src="js/main.js"></script>
      {/* META OG */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:url" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
    </Head>
  );
}

export default HeadDefault;
