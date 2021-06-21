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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/nivo-slider.css"
        integrity="sha512-3qYZBBFvlamXDDKmW5p0yWWXLYKkbryU2zY1aG/XgrHTu/lzICcnkPMdameqa/x2WgTrxXHuHW6lWUTdAXjgww=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.2/isotope.pkgd.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/10.1.0/js/smooth-scroll.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/venobox/1.8.3/venobox.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/jquery.nivo.slider.min.js"
        integrity="sha512-rwjQKesPaeXWoFNcTVz8rPBqsU06+JhcsudIQfpUiOhxGHqymn9aSJpG7NPu4MZJ7V32Cq4YjT1qV5vVngYA1g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/jquery.nivo.slider.js"
        integrity="sha512-c+ijwoxjM3KV+XBKQCbfbAuQ7omjYCyjx8Nei2e63oCa1Ih9WAUr3UrgHSyWXnjEm/oU42T90T0NtQjuKxpTnw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/jquery.nivo.slider.pack.min.js"
        integrity="sha512-rwjQKesPaeXWoFNcTVz8rPBqsU06+JhcsudIQfpUiOhxGHqymn9aSJpG7NPu4MZJ7V32Cq4YjT1qV5vVngYA1g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
      {/* <script>
        $(window).load(function (){' '}
        {$('#main-slider').nivoSlider({
          effect: 'sliceUp', //此参数可自选
          controlNavThumbs: true, //此参数可自选
        })}
        )
      </script> */}
      {/* <script src="js/contact.js"></script> */}

      {/* <script src="js/main.js"></script> */}
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
