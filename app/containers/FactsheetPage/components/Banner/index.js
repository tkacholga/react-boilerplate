import React from 'react';
import goldBars from 'images/goldBars.jpg';

const Banner = ({ company }) => (
  <section className="relative">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover"
        src={goldBars}
        width="1440"
        height="394"
        alt={company}
      />
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        aria-hidden="true"
      />
    </div>

    {/* Hero content */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="mb-4 text-gray-200 text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter"
            data-aos="fade-up"
          >
            {company}
          </h1>
          {/* <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Developers are trusted to create an engaging experience for their
              companies, so we build tools to help them.
            </p> */}
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
